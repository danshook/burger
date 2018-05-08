var connection = require("./connection");

var orm = {
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM " + tableName + ";";
    //"SELECT * FROM  burger"
    console.log("My argument replacing parameter tableName is : " + tableName);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log("SELECT ALL IS LOGGING!");
    });
  },

  insertOne: function(tableName, cols, vals, cb) {
    var queryString = "INSERT INTO " + tableName;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += vals.map(val => "?").toString;
    queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log("INSERT ONE IS LOGGING!");
    });
  },

  updateOne: function(tableName, objColVals, condition, cb) {
    var queryString = "UPDATE " + tableName;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
module.exports = orm;
