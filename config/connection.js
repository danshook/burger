// Set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "CuL@8Poos",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected to MySQL with id... " + connection.threadId);
});

module.exports = connection;
