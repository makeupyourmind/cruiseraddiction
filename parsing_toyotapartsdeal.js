const fs_extra = require('fs-extra');
const fs = require('fs');
const puppeteer = require('puppeteer')
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
const cheerio = require('cheerio')
const config = require('./parser/config')
const { Tpd } = require('./parser/sequelize/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const detailUrl = config.TOYOTA_PARTS_DEAL;

// puppeteer.use(StealthPlugin());
// puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

(async (part_number) => {
    let execution_time_start = new Date(), execution_time_end
    // let item = {}
    // part_number = "27060-0T041";
    // part_number = "43401-60041"
    // part_number = "43212-60050"
    // part_number = "85242-42030"
    // part_number = "43340-39465"
    // part_number = "44444444444"
    const endDate = new Date();
    const startDate = new Date(new Date().getTime() - (24 * 3600 * 1000) * 30)
    const record_exsist = await Tpd.findOne({
        where: {
            part_number: part_number,
            createdAt: {
                [Op.between]: [startDate, endDate]
            }
        }
    })
    if (record_exsist) {
        execution_time_end = new Date() - execution_time_start
        console.log(`Record exsist ${execution_time_end / 1000}s`)
        fs.appendFile("./parser/logs/parsing_toyotapartsdeal.txt", `Record ${part_number} exsist ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
            if (err) {
                return console.log(err);
            }
            process.exit(0)
        });
    }
    else {
        const browser = await puppeteer.launch({
            headless: false,
            args: [
                config.PROXY_URL,
            ]
        })
        let chromeTmpDataDir = null;
        let chromeSpawnArgs = browser.process().spawnargs;
        for (let i = 0; i < chromeSpawnArgs.length; i++) {
            if (chromeSpawnArgs[i].indexOf("--user-data-dir=") === 0) {
                chromeTmpDataDir = chromeSpawnArgs[i].replace("--user-data-dir=", "");
            }
        }
        const page = await browser.newPage();
        await page.setViewport({ width: 1800, height: 800 })
        await page.goto(detailUrl, {
            timeout: 3000000,
            waitUntil: 'domcontentloaded'
        })
        // console.log(`Testing the stealth plugin1..`)
        // await page.goto(detailUrl)

        await page.waitFor(2000)

        await page.focus('section.e.search_box > input.e.input')

        await page.keyboard.type(part_number)

        // await page.click('section.e.search_box > div.e.submit')
        await page.focus('section.e.search_box > input.e.input')
        await page.keyboard.press('Enter');
        // await page.type(String.fromCharCode(13));

        // await page.screenshot({ path: 'testresult.png', fullPage: true })
        await page.waitFor(4000)
        // await page.screenshot({ path: 'testresult.png', fullPage: true })
        // console.log(`Testing the stealth plugin2..`)
        let part_number_in_available = await page.evaluate(() => {
            let check = document.querySelector('section.m_ns_results is_recommend p_clear > div.title > p.total > span')
            return check ? true : false
        })

        let modal = await page.evaluate(() => {
            let check = document.querySelector('div.p_dialog_c > div.p_dialog_c_head')
            return check ? true : false
        })

        if (!part_number_in_available && !modal) {
            let brand_name = await page.evaluate(() => document.querySelector('div.summary.p_clear > h1').innerText)
            brand_name = brand_name.split(' ')[0]
            let description = await page.evaluate(() => {
                const query = document.querySelector('td.e.desc')
                if (query) {
                    return query.innerText
                }
                return false
            })

            let discontinued = await page.evaluate(() => {
                let check = document.querySelector('div.discontinue  > span')
                return check ? true : false
            })

            let price = await page.evaluate(() => {
                let check = document.querySelector('div.your > b > span')
                return check ? check.innerText : false
            })

            const retail = await page.evaluate(() => {
                let check = document.querySelector('div.retail > span > del');
                return check ? check.innerText : false
            })

            let replaced = await page.evaluate(() => {
                let check = document.querySelectorAll('tr.e.replace > td')[1];
                return check ? check.innerText : false
            })

            const related_exsist = await page.evaluate(() => {
                let check = document.querySelector('section.m_pn_related > h2.title')
                return check ? true : false
            })

            let relatedParts

            if (related_exsist) {
                relatedParts = await page.evaluate(() => {
                    const names = Array.from(document.querySelectorAll('li.e.item > a.block > p.e.text'), e => e.textContent)
                    const part_numbers = Array.from(document.querySelectorAll('li.e.item > a.block > p.pn'), e => e.textContent)
                    if (names && part_numbers) {
                        return names.map((item, index) => {
                            return {
                                name: item,
                                part_number: part_numbers[index]
                            }
                        })
                    } else {
                        return false
                    }
                })
                // relatedParts ? item.relatedParts = relatedParts : item.relatedParts = []
                relatedParts = relatedParts ? relatedParts : []
            }

            ////////////////////
            // replaced ? item.replaced = replaced.replace('\t', ' ') : item.replaced = null
            replaced = replaced ? replaced.replace('\t', ' ') : null
            // retail ? item.retail_price = retail : item.retail_price = null
            retail_price = retail ? retail : null
            // price ? item.price = price : item.price = null
            price = price ? `$${price}` : null
            // description ? item.description = description : item.description = null
            description = description ? description : null
            // discontinued ? item.discontinued = true : item.discontinued = false
            discontinued = discontinued ? true : false

            // item.part_number = part_number
            // item.name = name
            // console.log(item);
            ///////////////
            await Tpd.create({
                part_number: part_number,
                brand_name: brand_name,
                replaced: replaced,
                retail_price: retail_price,
                price: price,
                description: description,
                discontinued: discontinued,
                relatedParts: relatedParts
            })
            execution_time_end = new Date() - execution_time_start
            await browser.close()
            console.log(`Script executed successfully ${execution_time_end / 1000}s`)
            fs.appendFile("./parser/logs/parsing_toyotapartsdeal.txt", `Script executed successfully ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        } else {
            execution_time_end = new Date() - execution_time_start
            await browser.close()
            console.log(`Script executed part not found on site ${execution_time_end / 1000}s`)
            fs.appendFile("./parser/logs/parsing_toyotapartsdeal.txt", `Script executed part ${part_number} not found on site ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
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
}
)(process.argv[2]);