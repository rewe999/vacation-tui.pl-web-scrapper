const puppeteer = require('puppeteer');
const data = require('./env');
const {connection} = require('./db')
const action = require('./actions/actionBootstrap');
const {insertAuthor} = require('./queries/insert');

(async () => {
    console.log("Starting...")

    const browser = await puppeteer.launch({headless: false}); // { headless: false }
    const page = await browser.newPage();
    await page.goto(data.url)

    action.confirmCookies(page);
    await action.showMore(page);

    const hotelData = action.getOffers(page).then((data) => {
        connection.connect((error) => {
            if (error) {
                console.log('Error connecting to MySQL database:', error);
            } else {
                insertAuthor(connection, data);
            }
        });
    });

    connection.end();
    // await browser.close();
    console.log("Success");
})();




