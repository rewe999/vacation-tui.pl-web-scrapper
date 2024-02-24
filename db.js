const data = require('./env');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: data.host,
    user: data.user,
    password: data.db_password,
    database: data.database
})

module.exports = {
    connection
};