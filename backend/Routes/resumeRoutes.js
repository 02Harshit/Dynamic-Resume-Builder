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

// router.get("/:userId", async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const resume = await Resume.findOne({ userId });

//         if (!resume) {
//             return res.status(404).json({ message: "Resume not found" });
//         }

//         res.json(resume);
//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//     }
// });


// Get Resume by User ID
// router.get("/:userId", async (req, res) => {
//   try {
//       const { userId } = req.params;

//       // // Check if userId is a valid ObjectId
//       // if (!mongoose.Types.ObjectId.isValid(userId)) {
//       //     return res.status(400).json({ message: "Invalid userId format" });
//       // }

//       // // Find the resume by userId
//       // const resume = await Resume.find({userId});


//       if (!mongoose.Types.ObjectId.isValid(userId)) {
//         return res.status(400).json({ message: "Invalid userId format" });
//       }
//       console.log("Searching resume for:", userId);
//       const resume = await Resume.findOne({ userId: new mongoose.Types.ObjectId(userId) });

//       if (!resume || resume.length === 0) {
//         return res.status(404).json({ message: "No resumes found for this user" });
//       }

//       res.json(resume);

//   } catch (error) {
//       console.error("Error fetching resume:", error);
//       res.status(500).json({ message: "Server error" });
//   }
// });

// Import authMiddleware at the top if not already imported


router.get("/my-resume", authMiddleware, async (req, res) => {
    try {
      
        const userId = req.user.id;
        console.log("Fetching resume for user ID from token:", userId);

        const resume = await Resume.findOne({ userId });

        if (!resume) {
            return res.status(404).json({ message: "Resume not found for this user." });
        }

        res.status(200).json(resume.resumeData); // Or send resume if needed
    } catch (error) {
        console.error("Error fetching resume:", error);
        res.status(500).json({ message: "Server error while fetching resume." });
    }
});


module.exports = router;
