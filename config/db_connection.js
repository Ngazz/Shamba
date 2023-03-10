const mysql = require('mysql2')
const credentials = require('../credentials')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: credentials.pass,
    database: 'shamba'
});

module.exports = con