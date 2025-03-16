require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Define Schema & Model
const jobApplicationSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true }, // Prevent duplicate emails
  resume: String, // Stores file path
  coverLetter: String,
  appliedAt: { type: Date, default: Date.now },
});

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

// Multer Storage Config (File Uploads)
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// API Route to Handle Form Submission
app.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, coverLetter } = req.body;

    if (!name || !email || !req.file) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // Check if the user has already applied (Only checking email)
    const existingApplication = await JobApplication.findOne({ email });
    if (existingApplication) {
      return res
        .status(400)
        .json({ error: "You have already applied using this email." });
    }

    const newApplication = new JobApplication({
      name,
      email,
      resume: req.file.path, // Store file path
      coverLetter,
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ error: "Server error, please try again later." });
  }
});

// API Route to Check if Email Already Exists
app.get("/check-email", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const existingUser = await JobApplication.findOne({ email });

    if (existingUser) {
      return res.status(200).json({ exists: true });
    }

    return res.status(200).json({ exists: false });
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({ error: "Server error, please try again later." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
