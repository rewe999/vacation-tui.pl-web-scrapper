# Vacation Web Scraper

This application scrapes vacation offers from tui.pl and saves all the offers that interest you into a database. Additionally, it sends an email notification for new offers that have not been received before.

## Prerequisites

- Node.js
- npm
- MySQL database

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/vacation-web-scraper.git
    cd vacation-web-scraper
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Fill data in `env.js`:

    ```javascript
    module.exports = {
    url:'https://www.tui.pl/last-minute?utm_source=google&utm_medium=cpc&utm_campaign=TUI_Last-Minute_Search&utm_content=Last+minute&gad_source=1&gclid=EAIaIQobChMIm8TdkPPTiAMVSLVoCR04DD0bEAAYAiAAEgJsoPD_BwE&gclsrc=aw.ds&q=%3AflightDate%3AbyPlane%3AT%3AadditionalType%3AGT03%2523TUZ-LAST25%3AdF%3A6%3AdT%3A14%3ActAdult%3A2%3ActChild%3A0%3AminHotelCategory%3AdefaultHotelCategory%3AtripAdvisorRating%3AdefaultTripAdvisorRating%3Abeach_distance%3AdefaultBeachDistance%3AtripType%3AWS&fullPrice=false',
    host:'127.0.0.1',
    user:'admin',
    password:'admin',
    db_password:'admin',
    database:'mydb',
};
    ```

4. Run database queries:

    1. Create a database:
    ```sql
    CREATE DATABASE mydb;
    ```

    2. Create a table:
    ```sql
    CREATE TABLE vacation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hotelName VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    city VARCHAR(255) NOT NULL,
    airport VARCHAR(255) NOT NULL,
    link VARCHAR(500),
    hotelCode VARCHAR(100) NOT NULL
    );
    ```

5. Ensure the `hotelCode` column in the `mydb.vacation` table is unique:
    ```sql
    ALTER TABLE mydb.vacation ADD UNIQUE (hotelCode);
    ```

## Usage

1. Start the application:
    ```sh
    node index.js
    ```

2. The application will:
    - Launch a browser and navigate to tui.pl.
    - Scrape vacation offers.
    - Save the offers to the database.
    - Send an email notification for new offers.
