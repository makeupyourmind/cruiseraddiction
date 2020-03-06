const fs_extra = require('fs-extra')
const fs = require('fs')
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const { Op } = require('sequelize')
const { Amayama } = require('./parser/sequelize/models')
const env = process.env.NODE_ENV || 'development'
const config = require('./parser/config')[env]
const detailUrl = config.AMAYAMA;

(async (part_number) => {
    let execution_time_start = new Date(),
        execution_time_end, non_original_replacements = [],
        original_replacements = [], data, th_table = [], tableData = []

    // part_number = "4340160081"
    // part_number = "43401-60041"
    // part_number = "31210-36160"
    // part_number = "4444444444"

    const endDate = new Date();
    const startDate = new Date(new Date().getTime() - (24 * 3600 * 1000) * 30)
    const record_exsist = await Amayama.findOne({
        where: {
            part_number: part_number.split("-").join(''),
            createdAt: {
                [Op.between]: [startDate, endDate]
            }
        }
    })

    if (record_exsist) {
        execution_time_end = new Date() - execution_time_start
        console.log(`Record ${part_number} exsist in the last 30 days ${execution_time_end / 1000}s`)
        fs.appendFile("./parser/logs/parsing_amayama.txt", `Record ${part_number} exsist ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
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
        });

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
        });

        await page.focus('.search__input')

        await page.keyboard.type(part_number)

        await page.click('button.search__submit')

        await page.waitFor(1000);

        const isStock = await page.evaluate(() => {
            const selector = document.querySelector('.text_plate')
            return selector ? selector.innerText : ""
        });

        if (!isStock) {
            process.exit(0)
        }

        if (isStock == "Permanently out of stock") {
            await browser.close();
            execution_time_end = new Date() - execution_time_start
            console.log(`Script executed. Part number ${part_number} wasn't found ${execution_time_end / 1000}s`)
            fs.appendFile("./parser/logs/parsing_amayama.txt", `Script executed. Part number ${part_number} wasn't found ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        }
        else {

            let html = await page.content();

            let $ = cheerio.load(html);
            let item = {};

            await page.evaluate(() => $('input.ui-autocomplete-input').autocomplete("search", ""));

            await page.evaluate(() => {
                let child = $('#ui-id-2')[0].childNodes;
                li = [].find.call(child, function (elem) {
                    return elem.textContent == 'United States of America'
                })
                li.click();
            });
            await page.waitFor(1000);

            const discontinued = await page.evaluate(() => {
                let check_in_dom = document.querySelector('div.part-page__discontinued-warning.warning-plate');
                return check_in_dom ? true : false
            })

            const exist_original_replacements = await page.evaluate(() => {
                let check_in_dom = document.querySelector('div.part-page__original-replacements.j_partOriginalReplacements').style.display
                return check_in_dom === 'none' ? false : true
            })

            if (exist_original_replacements) {

                data = await page.evaluate(() => {
                    return Array.from(document.querySelector('table.part-table.part-table_nested')
                        .querySelectorAll('tbody.part-table__body.part-table__body_alternate > tr.part-table__row'), (element) => {
                            return Array.from(element.querySelectorAll('td'), (e) => e.textContent)
                                .map(item => typeof item === 'string' ? item.replace(/\s{2,}/g, ' ') : '')
                                .map(item => typeof item === 'string' ? item.replace(/^\s+/, "").replace(/\s+$/, "") : '')
                                .filter(item => item)

                        })
                });

                th_table = ['original_number', 'warehouse', 'price', 'shippingCost', 'qty'];
                for (let element of data) {
                    const obj = {};
                    element.splice(4, 1)
                    element.forEach((item, index) => {
                        obj[th_table[index]] = item;
                    })
                    original_replacements.push(obj);
                }
            }

            data = await page.evaluate(() => {
                return Array.from(document.querySelector('table.part-table').querySelectorAll('tbody.part-table__body > tr.part-table__row'), (element) => {
                    return Array.from(element.querySelectorAll('td'), (e) => e.textContent)
                        .map(item => typeof item === 'string' ? item.replace(/\s{2,}/g, ' ') : '')
                        .map(item => typeof item === 'string' ? item.replace(/^\s+/, "").replace(/\s+$/, "") : '')
                        .filter(item => item)

                })
            });
            th_table = ['warehouse', 'price', 'shippingCost', 'qty'];
            for (let element of data) {
                const obj = {};
                element.splice(3, 1)
                element.forEach((item, index) => {
                    obj[th_table[index]] = item;
                })
                tableData.push(obj);
            }


            const exist_non_original_replacements = await page.evaluate(() => {
                let check_in_dom = document.querySelector('div.part-page__non-original-replacements.j_partNonOriginalReplacements').style.display
                return check_in_dom === 'none' ? false : true
            })

            if (exist_non_original_replacements) {
                let [non_original_replacements_one, non_original_replacements_two] = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('table.part-table.part-table_nested')[1]
                        .querySelectorAll('tbody.part-table__body > tr.part-table__row.part-table__row_darkened'), (element) => {
                            return [Array.from(element.querySelectorAll('td > span'), (e) => e.textContent)
                                .map(item => typeof item === 'string' ? item.replace(/\s{2,}/g, ' ') : '')
                                .map(item => typeof item === 'string' ? item.replace(/^\s+/, "").replace(/\s+$/, "") : '')
                                .filter(item => item)
                            ]

                        })
                })

                let [, [[, , shippping],]] = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('table.part-table.part-table_nested')[1]
                        .querySelectorAll('tbody.part-table__body > tr.part-table__row.part-table__row_darkened'), (element) => {
                            return [Array.from(element.querySelectorAll('td'), (e) => e.textContent)
                                .map(item => typeof item === 'string' ? item.replace(/\s{2,}/g, ' ') : '')
                                .map(item => typeof item === 'string' ? item.replace(/^\s+/, "").replace(/\s+$/, "") : '')
                                .filter(item => item)
                            ]

                        })
                })

                const non_original_replacements_concated = non_original_replacements_one.map((item, index) => item.concat(non_original_replacements_two[index]))

                th_table = ['brand', 'part_number', 'name', 'warehouse', 'price', 'shippingCost', 'qty'];
                for (let element of non_original_replacements_concated) {
                    const obj = {};
                    element.splice(5, 1, shippping)
                    element.forEach((item, index) => {
                        obj[th_table[index]] = item;
                    })
                    non_original_replacements.push(obj);
                }
            }

            const name = await page.evaluate(() => document.querySelector('div.part-page__name > h1').innerText);

            const description = await page.evaluate(() => document.querySelector('div.part-page__name > h2').innerText);

            let [, weight,] = await page.evaluate(() => document.querySelector('.part-page__weight').innerText.split(' '));

            weight = weight !== 'unknown' ? +weight : null

            let catalog = await page.evaluate(() => {
                let check_in_dom = document.querySelector('div.part-page__catalog-name > span.info-hint-new.part-page__catalog-number ')
                return check_in_dom ? check_in_dom.innerText : null
            })
            part_number = await page.evaluate(() => document.querySelector('div.part-page__number').innerText)

            item.name = name
            item.description = description
            item.catalog = catalog
            item.part_number = part_number
            item.weight = weight
            item.discontinued = discontinued
            item.tableData = tableData
            item.original_replacements = original_replacements
            item.non_original_replacements = non_original_replacements
            console.log(item)

            await browser.close();
            execution_time_end = new Date() - execution_time_start

            const full_part_number = part_number
            part_number = part_number.split("-").join('')
            await Amayama.create({
                name,
                part_number,
                full_part_number,
                weight,
                description,
                catalog,
                discontinued,
                tableData,
                original_replacements,
                non_original_replacements
            })

            console.log(`Script executed successfully ${part_number} ${execution_time_end / 1000}s`)
            fs.appendFile("./parser/logs/parsing_amayama.txt", `Script executed successfully ${execution_time_end / 1000}s ${new Date()}\n`, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        }

        if (chromeTmpDataDir !== null) {
            await fs_extra.remove(chromeTmpDataDir);
        }
        process.exit(0)
    }
})(process.argv[2]);