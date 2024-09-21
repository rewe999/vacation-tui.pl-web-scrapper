const { sendEmail } = require('../actions/sendEmail');

function insertOffers(connection, data) {
    const newOffers = [];

    const insertPromises = data.map(offer => {
        return new Promise((resolve, reject) => {
            connection.query(
                'INSERT IGNORE INTO mydb.vacation (hotelName, price, city, airport, link, hotelCode) VALUES (?, ?, ?, ?, ?, ?)',
                [offer.hotelName, offer.price, offer.city, offer.airport, offer.hotelLink, offer.hotelCode],
                (error, results, fields) => {
                    if (error) {
                        console.log('insert data error: ', error);
                        reject(error);
                    } else if (results.affectedRows > 0) {
                        newOffers.push(offer);
                        resolve();
                    } else {
                        resolve();
                    }
                }
            );
        });
    });

    Promise.all(insertPromises)
        .then(() => {
            console.log('New offers:', newOffers);

            // Send emails for new offers
            newOffers.forEach(offer => {
                sendEmail(offer);
            });
        })
        .catch(error => {
            console.log('Error processing offers:', error);
        });
}

module.exports = {
    insertOffers: insertOffers
}