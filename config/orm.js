// Import (require) connection.js into orm.js
var connection = require("./connection.js");

// In the orm.js file, create the methods that will
//  execute the necessary MySQL commands in the controllers. 
//  These are the methods you will need to use in order to 
//  retrieve and store data in your database.

// ORM

var tableName = "burgers";

var orm = {
  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
//   BOOLEAN
  burgers: function(callback) {
    var s = "SELECT * FROM burgers where devoured = true" + tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.
  searchCharacter: function(name, callback) {
    var s = "select * from " + tableName + " where routeName=?";

    connection.query(s, [name], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for adding characters to the database
  // Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement.
  addCharacter: function(character, callback) {
    // Creating a routeName so its easy to search.

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = character.name.replace(/\s+/g, "").toLowerCase();
    console.log(routeName);

    var s = "INSERT INTO " + tableName + " (routeName, name, role, age, forcePoints) VALUES (?,?,?,?,?)";

    connection.query(s, [routeName, character.name, character.role, character.age, character.forcePoints], function(
      err,
      result
    ) {
      callback(result);
    });
  }
};

module.exports = orm;
