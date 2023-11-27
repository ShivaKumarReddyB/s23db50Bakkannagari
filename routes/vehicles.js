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
router.get("/create", secured, vehicleControllers.vehicle_create_Page);

// A little function to check if we have an authorized user and continue on
//or;
// redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
};
/* GET create update page */
router.get("/update", secured, vehicleControllers.vehicle_update_Page);
// /* GET delete vehicle page */
router.get("/delete", secured, vehicleControllers.vehicle_delete_Page);

module.exports = router;
