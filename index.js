const puppeteer = require('puppeteer');
const data = require('./env');
const {connect} = require('./db')
const action = require('./actions/actionBootstrap');

let connection = connect;

(async () => {
    console.log("Starting")
    connection.connect((err) => {
        if (err) {
            console.log("Error connecting to database");
            return;
        }
        console.log("Connected to database");
    });
    process.exit(0);


    const browser = await puppeteer.launch({headless: false}); // { headless: false }
    const page = await browser.newPage();
    await page.goto(data.url)

    action.confirmCookies(page);
    await action.showMore(page);

    const hotelData = action.getOffers(page).then((data) => console.log(data));
    console.log(hotelData);


    // await browser.close();
    console.log("Success");
})();

// db.connect.end();


