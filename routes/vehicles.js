var express = require("express");
var router = express.Router();

var express = require("express");
const vehicleControllers = require("../controllers/vehicleController");
// var router = express.Router();
/* GET costumes */
router.get("/", vehicleControllers.vehicle_view_all_Page);

/* GET detail Vehicle page */
router.get("/detail", vehicleControllers.vehicle_view_one_Page);
/* GET create vehicle page */
router.get("/create", vehicleControllers.vehicle_create_Page);
/* GET create update page */
router.get("/update", vehicleControllers.vehicle_update_Page);
// /* GET delete vehicle page */
router.get("/delete", vehicleControllers.vehicle_delete_Page);

module.exports = router;
