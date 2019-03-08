// GOOD

// Require mysql
var mysql = require("mysql");
require("dotenv").config();

// -- Connecting to MySQL, settings
var connection;
console.log(process.env.JAWSDB_URL);
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: process.env.password,
    database: "burgers_db"
});
};

// Calling connect method to mySQL
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

// Export connection
module.exports = connection;