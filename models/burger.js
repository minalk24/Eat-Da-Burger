// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

var orm = require("../config/orm.js");

var burger ={
    selectAll: function(cb) {
        //Calling the ORM method that will execute the SQL statement and send result set in return 
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
      insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
      updateOne: function(objColVals, condition, cb) {
        console.log("Model" + objColVals);
        orm.updateOne("burgers",objColVals, condition, function(res) {
          cb(res);
        });
      },
}; 

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
