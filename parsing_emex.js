const fs_extra = require('fs-extra');
const fs = require('fs');
const puppeteer = require('puppeteer')
const { Op } = require('sequelize')
const { Emex } = require('./parser/sequelize/models')
const env = process.env.NODE_ENV || 'development'
const config = require('./parser/config')[env]
const detailUrl = config.EMEX;

(async (part_number) => {
    let execution_time_start = new Date(), execution_time_end

    part_number = "43401-60041"
    // part_number = "9008036064"
    // part_number = "9091901164"
    // part_number = "444444444"

    const endDate = new Date();
    const startDate = new Date(new Date().getTime() - (24 * 3600 * 1000) * 30)
    const record_exsist = await Emex.findOne({
        where: {
            part_number: part_number,
            createdAt: {
                [Op.between]: [startDate, endDate]
            }
        }
    })

    if (record_exsist) {
        execution_time_end = new Date() - execution_time_start
        console.log(`EMEX. Record ${part_number} exsist in the last 30 days ${execution_time_end / 1000}s`)
        fs.appendFile("./parser/logs/parsing_emex.txt", `Record ${part_number} exsist ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
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

        const context = browser.defaultBrowserContext();
        await context.overridePermissions(detailUrl, ['geolocation']);

        let chromeTmpDataDir = null;
        let chromeSpawnArgs = browser.process().spawnargs;

        for (let chromeSpawnArg of chromeSpawnArgs) {
            if (chromeSpawnArg.includes("--user-data-dir=")) {
                chromeTmpDataDir = chromeSpawnArg.replace("--user-data-dir=", "");
            }
        }

        const page = await context.newPage(); //browser
        await page.setViewport({ width: 1800, height: 800 })
        await page.goto(detailUrl, {
            waitUntil: 'load',
            timeout: 0
        })

        await page.focus('#detail-num-input')

        await page.keyboard.type(part_number)

        await page.click('div.search-button-text')

        await page.waitFor(13000)

        const part_number_in_available = await page.evaluate(() => {
            let no_results = document.querySelector('div.col.column-make-num > span.detail-make');
            return no_results ? true : false
        })

        if (part_number_in_available) {

            await page.click('.col.other-items > span')

            const brand_name = await page.evaluate(() => {
                let check_in_dom = document.querySelector('div.col.column-make-num > span.detail-make');
                return check_in_dom ? check_in_dom.innerText : ''
            })


            let chain_part_numbers = await page.evaluate(() => {
                const selector = 'div.subpanel.subpanel-details.original-list > div > div.detail-list > div > div.col.column-make-num > div.detail-numbers'
                return Array.from(document.querySelectorAll(selector), e => e.textContent.trim().replace(/\s+/g, ' '))
            })

            let chain_part_numbers_transformed = chain_part_numbers
                .map(item => item.split(' '))
                .filter(item => item.length > 1)
            // console.log(chain_part_numbers)
            const arr_key = ['replaced_from', 'replaced_to']
            const chain = chain_part_numbers_transformed.map(item => {
                const [from, to] = item.map((item, index) => ({ [arr_key[index]]: item }))
                const merged = { ...from, ...to }
                return merged
            })
            // console.log(chain)
            const analogues = await page.evaluate(() => {
                let analogues_in_available = document.querySelectorAll('div.subpanel.subpanel-details')[3].innerText.trim().replace(/\s+/g, ' ')
                if (analogues_in_available.length <= 22) {
                    return []
                }
                else {
                    const selector_brand_names = 'div.make-group.expandable-list > div.detail-list > div.analog-small-group > div.col.column-make-num > span.detail-make'
                    const brand_names_analogues = Array.from(document.querySelectorAll(selector_brand_names), e => e.textContent)
                    const selector_part_numbers = 'div.make-group.expandable-list > div.detail-list > div.analog-small-group > div.col.column-make-num > div.detail-numbers > div > a'
                    const part_numbers_analogues = Array.from(document.querySelectorAll(selector_part_numbers), e => e.textContent)
                    return brand_names_analogues.map((item, index) => ({
                        brand_name: item,
                        part_number: part_numbers_analogues[index]
                    }))
                }
            })
            // console.log(part_number)
            // console.log(brand_name)
            // console.log(chain)
            // console.log(analogues)

            await browser.close();
            execution_time_end = new Date() - execution_time_start

            await Emex.create({
                brand_name,
                part_number,
                chain,
                analogues
            })

            console.log(`Script EMEX executed successfully ${execution_time_end / 1000}s`)
            fs.appendFile("./parser/logs/parsing_emex.txt", `Script executed successfully ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        }
        else {
            await browser.close();
            execution_time_end = new Date() - execution_time_start
            console.log(`Script EMEX executed. Part number ${part_number} wasn't found ${execution_time_end / 1000}s`)
            fs.appendFile("./parser/logs/parsing_emex.txt", `Script executed. Part number ${part_number} wasn't found ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        }

        if (chromeTmpDataDir !== null) {
            await fs_extra.remove(chromeTmpDataDir);
        }
        process.exit(0);
    }
})(process.argv[2]);
