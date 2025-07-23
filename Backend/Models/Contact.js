const mongoose = require("mongoose");

// Define the contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  message: { type: String },
  filePath: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
