const puppeteer = require('puppeteer');
const data = require('./env');
const {connection} = require('./db')
const action = require('./actions/actionBootstrap');

(async () => {
    console.log("Starting...")

    const browser = await puppeteer.launch({headless: false}); // { headless: false }
    const page = await browser.newPage();
    await page.goto(data.url)

    action.confirmCookies(page);
    await action.showMore(page);

    const hotelData = action.getOffers(page).then((data) => console.log(data));
    console.log(hotelData);

    connection.connect((error) => {
        if (error) {
            console.log('Error connecting to MySQL database:', error);
        } else {
            connection.query('SELECT * FROM author', (error, results, fields) => {
                if (error) {
                    console.log('Error in the query', error);
                } else {
                    console.log('Results:', results);
                }
            });
        }
    });

    connection.end();
    // await browser.close();
    console.log("Success");
})();




