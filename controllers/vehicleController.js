var Vehicle = require("../models/vehicles");
// List of all Vehicles
exports.vehicle_list = async function (req, res) {
  try {
    theVehicles = await Vehicle.find();
    res.send(theVehicles);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// for a specific Vehicle.
exports.vehicle_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Vehicle detail: " + req.params.id);
};
// Handle Vehicle create on POST.
exports.vehicle_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Vehicle();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.model = req.body.model;
  document.color = req.body.color;
  document.year = req.body.year;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// Handle Vehicle delete form on DELETE.
exports.vehicle_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Vehicle delete DELETE " + req.params.id);
};
// Handle Vehicle update form on PUT.
exports.vehicle_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: Vehicle update PUT" + req.params.id);
};

// VIEWS
// Handle a show all view
exports.vehicle_view_all_Page = async function (req, res) {
  try {
    theVehicle = await Vehicle.find();
    console.log(theVehicle);
    res.render("vehicles", {
      title: "vehicle Search Results",
      results: theVehicle
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
