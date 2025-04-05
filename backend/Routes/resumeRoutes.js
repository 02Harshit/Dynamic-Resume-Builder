const express = require("express");
const Resume = require("../models/Resume");
const router = express.Router();
const mongoose = require("mongoose");
const authMiddleware = require("../middleware/authMiddleware");

// Save Resume
router.post("/save", async (req, res) => {
  try {
    const { userId, resumeData } = req.body;

    if (!userId || !resumeData) {
      return res.status(400).json({ success: false, message: "Missing data" });
    }

    // Create a new resume entry
    const newResume = new Resume({ userId, resumeData });
    await newResume.save();

    res.json({ success: true, resumeId: newResume._id });
  } catch (error) {
    console.error("Error saving resume:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// router.get("/my-resume", authMiddleware, async (req, res) => {
//     try {
      
//         const userId = req.user.id;
//         console.log("Fetching resume for user ID from token:", userId);

//         const resume = await Resume.findOne({ userId });

//         if (!resume) {
//             return res.status(404).json({ message: "Resume not found for this user." });
//         }

//         res.status(200).json(resume.resumeData); // Or send resume if needed
//     } catch (error) {
//         console.error("Error fetching resume:", error);
//         res.status(500).json({ message: "Server error while fetching resume." });
//     }
// });

router.get("/my-resume", authMiddleware, async (req, res) => {
  try {
      const userId = req.user.id;
      console.log("Fetching latest resume for user ID:", userId);

      const resume = await Resume.findOne({ userId }).sort({ createdAt: -1 }); // Fetch latest

      if (!resume) {
          return res.status(404).json({ message: "No resume found for this user." });
      }

      res.status(200).json(resume.resumeData);
  } catch (error) {
      console.error("Error fetching resume:", error);
      res.status(500).json({ message: "Server error while fetching resume." });
  }
});


module.exports = router;
