const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  frequecy: { type: String, required: true },
  notes: String,
  date: { type: Date, default: Date.now }
});

const Meds = mongoose.model("Meds", medsSchema);

module.exports = Meds;
