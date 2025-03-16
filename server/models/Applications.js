const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }, // Ensures unique emails
  resume: String, // Store file path or link
  coverLetter: String,
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
