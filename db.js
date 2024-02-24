const data = require('./env');
const mysql = require('mysql')

const connect = mysql.createConnection({
    host: data.host,
    user: data.user,
    password: data.db_password,
    database: data.database
});

module.exports = {
    connect
};