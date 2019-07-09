// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    console.log("key value pair" + key , ob[key]); 
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
  
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          // console.log(result);
          cb(result);
        });
      },
      insertOne: function(table, cols, colValue, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
    
        connection.query(queryString, [table, cols, colValue], function(err, result) {
          if (err) {
            throw err;
          }
          console.log("Data: " + result);
          cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
}

// Export the orm object for the model (burger.js).
module.exports = orm;