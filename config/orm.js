// Import (require) connection.js into orm.js
var connection = require('../config/connection.js');


var orm = {

// Select all method to retrieve data from mysql database
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
// Insert one method to retrieve data from mysql database
    insertOne: function (burger, callback) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
// Update one method to retrieve data from mysql database
    updateOne: function (id, callback) {
        var queryString = "UPDATE burgers SET devoured = true WHERE item_id = ?";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};

// Export ORM
module.exports = orm;
