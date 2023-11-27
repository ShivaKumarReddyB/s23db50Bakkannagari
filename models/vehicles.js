const mongoose = require("mongoose");
const vehicleSchema = mongoose.Schema({
  model: { type: String, minlength: 2 },
  color: { type: String, required: true },
  year: { type: Number, required: true }
});
module.exports = mongoose.model("Vehicle", vehicleSchema);
