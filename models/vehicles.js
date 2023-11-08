const mongoose = require("mongoose");
const vehicleSchema = mongoose.Schema({
  model: String,
  color: String,
  year: Number
});
module.exports = mongoose.model("Vehicle", vehicleSchema);
