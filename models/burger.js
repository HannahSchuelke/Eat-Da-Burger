// CHANGE BURGER VARIRABLE (ALSO IN OTHER PAGES)

// Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm.js");

// Calling ORM functions using burger-specific inputs
//importing the ORM to interact with the database

var burger = {
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },
    insertOne: function (burger, callback) {
        orm.insertOne(burger, function (res) {
            callback(res);
        });
    },
    updateOne: function (id, callback) {
        console.log("the id in burger model is " + id)
        orm.updateOne(id, function (res) {
            callback(res);
        });
    }
};
// Export the burger model for other files to use
module.exports = burger;