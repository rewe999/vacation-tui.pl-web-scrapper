const puppeteer = require('puppeteer');
const data = require('./env');
// const {connection} = require('./db')
const action = require('./actions/actionBootstrap');
const {insertAuthor} = require('./queries/insert');

(async () => {
    console.log("Starting...")

    const browser = await puppeteer.launch({headless: false}); // { headless: false }
    const page = await browser.newPage();
    await page.goto(data.url)

    await action.confirmCookies(page);

    let hasMoreOffers = true;

    while (hasMoreOffers) {
        hasMoreOffers = await action.showMore(page);
    }

    const hotelData = await action.getOffers(page);
    console.log(hotelData);

    // connection.end();
    await browser.close();
    console.log("Success");
})();