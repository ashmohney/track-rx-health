const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medsSchema = new Schema({
  name: { type: String, required: true },
  frequency: { type: String, required: true },
  notes: String,
  date: { type: Date, default: Date.now }
});

const Meds = mongoose.model("Meds", medsSchema);

module.exports = Meds;
