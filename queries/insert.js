function insertAuthor(connection, data) {
    console.log(data);
    connection.query(
        'INSERT INTO learn.vacation (hotelName, price, city, airport, link, hotelCode) VALUES (?, ?, ?, ?, ?, ?)',
        [data.hotelName, data.price, data.city, data.airport, data.hotelLink, data.hotelCode],
        (error, results, fields) => {
        if (error) {
            console.log('insert data error: ', error);
        }
    });
}

module.exports = {
    insertAuthor
}