function insertOffers(connection, data) {
    data.forEach(offer => {
        connection.query(
            'INSERT IGNORE INTO mydb.vacation (hotelName, price, city, airport, link, hotelCode) VALUES (?, ?, ?, ?, ?, ?)',
            [offer.hotelName, offer.price, offer.city, offer.airport, offer.hotelLink, offer.hotelCode],
            (error, results, fields) => {
                if (error) {
                    console.log('insert data error: ', error);
                }
            }
        );
    });
}

module.exports = {
    insertOffers: insertOffers
}