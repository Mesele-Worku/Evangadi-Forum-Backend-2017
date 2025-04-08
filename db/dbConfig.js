const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "185.73.8.1",
  user: "evangadiAdmin",
  password: process.env.DB_PASSWORD,
  database: "evangadi-db",
});

module.exports = db.promise();
