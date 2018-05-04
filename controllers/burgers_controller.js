var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
    res.json({ id: result.id });
  });
});
module.exports = router;
