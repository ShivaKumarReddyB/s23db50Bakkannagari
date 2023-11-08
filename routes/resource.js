var express = require("express");
var router = express.Router();
// Require controller modules.
var api_controller = require("../controllers/api");
var vehicle_controller = require("../controllers/vehicleController");
/// API ROUTE ///
// GET resources base.
router.get("/", api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post("/vehicles", vehicle_controller.vehicle_create_post);
// DELETE request to delete Costume.
router.delete("/vehicles/:id", vehicle_controller.vehicle_delete);
// PUT request to update Costume.
router.put("/vehicles/:id", vehicle_controller.vehicle_update_put);
// GET request for one Costume.
router.get("/vehicles/:id", vehicle_controller.vehicle_detail);
// GET request for list of all Costume items.
router.get("/vehicles", vehicle_controller.vehicle_list);
module.exports = router;
