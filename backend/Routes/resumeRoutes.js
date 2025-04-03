const express = require("express");
const Resume = require("../models/Resume");
const router = express.Router();

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

router.get("/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const resume = await Resume.findOne({ userId });

        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }

        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
