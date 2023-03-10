const mysql = require('mysql2')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bakari@1",
    database: 'shamba'
});

module.exports = con