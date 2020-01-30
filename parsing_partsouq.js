const fs_extra = require('fs-extra')
const fs = require('fs')
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const { Op } = require('sequelize')
const { Partsouq } = require('./parser/sequelize/models')
const env = process.env.NODE_ENV || 'development'
const config = require('./parser/config')[env]
const detailUrl = config.PARTS_OUQ;

(async (part_number) => {
    let arr = [], data = {}, execution_time_start = new Date(),
        execution_time_end, shipping_cost

    // part_number = "338134X500"
    // part_number = "4340160080"
    // part_number = "4340160081"
    // part_number = '44444444444444'

    const endDate = new Date();
    const startDate = new Date(new Date().getTime() - (24 * 3600 * 1000) * 30)
    const record_exsist = await Partsouq.findOne({
        where: {
            part_number: part_number,
            createdAt: {
                [Op.between]: [startDate, endDate]
            }
        }
    })

    if (record_exsist) {
        execution_time_end = new Date() - execution_time_start
        console.log(`Record ${part_number} exsist in the last 30 days ${execution_time_end / 1000}s`)
        fs.appendFile("./parser/logs/parsing_partsouq.txt", `Record ${part_number} exsist ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
            if (err) {
                return console.log(err);
            }
            process.exit(0)
        });
    }
    else {
        const browser = await puppeteer.launch({
            headless: true,
            width: 1800,
            height: 800,
            args: [
                `--proxy-server=${config.PROXY_URL}`,
                '--proxy-bypass-list=*',
                '--no-sandbox'
            ]
        })

        let chromeTmpDataDir = null;
        let chromeSpawnArgs = browser.process().spawnargs;

        for (let chromeSpawnArg of chromeSpawnArgs) {
            if (chromeSpawnArg.includes("--user-data-dir=")) {
                chromeTmpDataDir = chromeSpawnArg.replace("--user-data-dir=", "");
            }
        }

        const page = await browser.newPage();

        await page.setViewport({ width: 1800, height: 800 })
        await page.goto(detailUrl, {
            waitUntil: 'load',
            timeout: 0
        })

        let html = await page.content();

        let $ = cheerio.load(html);

        await page.focus('input.form-control.input-search.active')

        await page.keyboard.type(part_number)

        await page.click('button.btn.btn-success.btn-sm')

        await page.waitFor(100)

        const in_available = await page.evaluate(() => {
            let check_in_dom = document.querySelector('div.alert.alert-danger')
            return check_in_dom ? true : false
        })

        if (in_available) {
            await browser.close();
            execution_time_end = new Date() - execution_time_start
            console.log(`Script executed. Part number ${part_number} wasn't found ${execution_time_end / 1000}s`)
            fs.appendFile("./parser/logs/parsing_partsouq.txt", `Script executed. Part number ${part_number} wasn't found ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
                if (err) {
                    return console.log(err);
                }
                process.exit(0)
            });
        }
        else {

            let part_numbers = await page.evaluate(() => Array.from(document.querySelectorAll('div.caption > h5'), e => e.textContent.trim().split(' ')[2]))
            let name = await page.evaluate(() => Array.from(document.querySelectorAll('h4.part-col-list-h4'), e => e.textContent))
            const price = await page.evaluate(() => Array.from(document.querySelectorAll('div.sr-price > span.price-new'), e => {
                const index = e.textContent.indexOf('$')
                return e.textContent.slice(0, index)
            }))

            let mb_10 = await page.evaluate(() => Array.from(document.querySelectorAll('p.mb-10px'), e => e.innerText))
            const qty = await page.evaluate(() => Array.from(document.querySelectorAll('span.label.label-pill'), e => e.innerText))
            let ships_in_days = mb_10.filter(item => item.includes('Ship')).map(item => item.trim().split(' ')[3])
            let weight = mb_10.filter(item => item.includes('Weight')).map(item => item.trim().split(' ')[2])

            data.part_number = part_number
            name.forEach((_, index) => {
                let item = {}
                item.ships_in_days = ships_in_days[index]
                item.part_number = part_numbers[index]
                item.name = name[index]
                item.price = price[index]
                item.qty = qty[index]
                item.weight = weight[index]
                arr.push(item)
            })
            const substitutions = arr.filter(item => item.part_number != part_number)
            const results = arr.filter(item => item.part_number == part_number)
            data.results = results
            data.substitutions = substitutions

            const add_to_card = await page.evaluate(() => {
                let check_in_dom = document.querySelector('span.text-uppercase.dxs.dxs3')
                return check_in_dom ? true : false
            })

            if (add_to_card) {

                await page.click('span.text-uppercase.dxs.dxs3')

                await page.waitFor(300)

                await page.click('a.flag-maker.popup-marker')

                await page.waitFor(300)

                await page.focus('input.select2-input')
                await page.keyboard.type('United States')
                await page.keyboard.press('Enter')

                await page.waitFor(300)

                shipping_cost = await page.evaluate(() => {
                    const shipping = document.querySelector('a.price-maker.popup-marker').innerText.split(' ')[2]
                    const index = shipping.indexOf('$')
                    return shipping.slice(0, index)
                })
                shipping_cost = +shipping_cost
            } else {
                shipping_cost = null
            }

            data.shipping_cost = shipping_cost
            console.log(data)

            await browser.close();

            execution_time_end = new Date() - execution_time_start
            console.log(`Script executed successfully ${part_number} ${execution_time_end / 1000}s`)
            fs.appendFile("./parser/logs/parsing_partsouq.txt", `Script executed successfully ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
                if (err) {
                    return console.log(err);
                }
            });

            await Partsouq.create({
                part_number,
                results,
                substitutions,
                shipping_cost
            })
        }

        if (chromeTmpDataDir !== null) {
            await fs_extra.remove(chromeTmpDataDir);
        }
        process.exit(0)
    }
})(process.argv[2]);