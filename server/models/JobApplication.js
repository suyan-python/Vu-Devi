const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  resume: { type: String, required: true }, // Stores full file path (URL)
  contentType: {
    type: String,
    required: true,
    enum: ["application/pdf"], // Ensures only PDFs are stored
  },
  coverLetter: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now },
});

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

module.exports = JobApplication;
