const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "wahlfach.cw2zht1qei1y.eu-north-1.rds.amazonaws.com",
    user: "serhii",
    password: "serhii123",
    database: "wahlfach"
});

conn.connect();

module.exports = conn;