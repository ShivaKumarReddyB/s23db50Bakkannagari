var express = require("express");
var router = express.Router();

var express = require("express");
const vehicleControllers = require("../controllers/vehicleController");
// var router = express.Router();
/* GET costumes */
router.get("/", vehicleControllers.vehicle_view_all_Page);
module.exports = router;
