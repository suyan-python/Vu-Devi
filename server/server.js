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
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"), false);
    }
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// const upload = multer({ storage });
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"), false);
    }
    cb(null, true);
  },
});

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

// **************************************************************************************************************************************************************************

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Admin = require("./models/Admin");
// const JobApplication = require("./models/JobApplication");

const router = express.Router();

// Secret key for JWT
const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

// Admin Login Route
router.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ adminId: admin._id }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Middleware to Protect Admin Routes
const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.adminId = decoded.adminId;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

// Get All Job Applications (Protected)
router.get("/admin/applications", verifyAdmin, async (req, res) => {
  try {
    const applications = await JobApplication.find();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
