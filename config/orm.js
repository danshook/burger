var connection = require("./connection");

var orm = {
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM " + tableName + ";";

    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
