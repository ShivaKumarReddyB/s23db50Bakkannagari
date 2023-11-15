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
exports.vehicle_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await Vehicle.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
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
exports.vehicle_delete = async function (req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await Vehicle.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};
// Handle Vehicle update form on PUT.
exports.vehicle_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body
  ${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await Vehicle.findById(req.params.id);
    console.log({ toUpdate });
    // Do updates of properties
    if (req.body.model) toUpdate.model = req.body.model;
    if (req.body.color) toUpdate.color = req.body.color;
    if (req.body.year) toUpdate.year = req.body.year;
    let result = await toUpdate.save();
    console.log("Sucess " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id}
  failed`);
  }
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

exports.vehicle_view_one_Page = async function (req, res) {
  console.log("single view for id " + req.query.id);
  try {
    result = await Vehicle.findById(req.query.id);
    res.render("vehicleDetail", { title: "vehicleDetail", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vehicle_create_Page = function (req, res) {
  console.log("create view");
  try {
    res.render("vehicleCreate", { title: "Vehicle Create" });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for updating a costume.
// query provides the id
exports.vehicle_update_Page = async function (req, res) {
  console.log("update view for item " + req.query.id);
  try {
    let result = await Vehicles.findById(req.query.id);
    if (!result) {
      // Handle the case where the instance with the given ID doesn't exist
      res.status(404).send(`No instance to delete`);
      return;
    }
    res.render("vehicleUpdate", { title: "Vehicle Update", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};
