const puppeteer = require('puppeteer');
const data = require('./env');
const {connection} = require('./db')
const action = require('./actions/actionBootstrap');
const {insertOffers} = require('./queries/insert');

(async () => {
    console.log("Starting...")

    const browser = await puppeteer.launch({headless: false}); // { headless: false }
    const page = await browser.newPage();
    await page.goto(data.url)
    connection.connect();

    await action.confirmCookies(page);

    let hasMoreOffers = true;

    while (hasMoreOffers) {
        hasMoreOffers = await action.showMore(page);
    }

    const hotelData = await action.getOffers(page);
    insertOffers(connection, hotelData);
    console.log(hotelData);

    connection.end();
    await browser.close();
    console.log("Success");
})();