var orm = require("../config/orm");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },

  insertOne: function(cb) {
    orm.insertOne("burger", function(res) {
      cb(res);
    });
  },

  updateOne: function(cb) {
    orm.updateOne("burger", function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
