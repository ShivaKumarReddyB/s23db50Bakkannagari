var express = require("express");
var router = express.Router();

/* GET vehicles page. */
router.get("/", function (req, res, next) {
  res.render("vehicles", { title: "Search Results - Vehicles" });
});

module.exports = router;
