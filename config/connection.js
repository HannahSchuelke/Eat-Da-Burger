// Require mysql
var mysql = require("mysql");
require("dotenv").config();

// -- Connecting to MySQL, settings
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: process.env.password,
    database: "burgers_db"
});

// Calling connect method to mySQL
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // startApp();
});

// REFERENCE B-AMAZON HERE IN .JS FILE FOR MORE JAVASCRIPT LOGIC
// PLACE UNKNOWN.

// Export connection
module.exports = connection;