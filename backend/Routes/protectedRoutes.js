const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // Import middleware
const router = express.Router();

// Dashboard Route
router.get("/dashboard", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to your dashboard", user: req.user });
});

// Choose Resume Route
router.get("/chooseTemplate", authMiddleware, (req, res) => {
    res.json({ message: "Choose a resume template", user: req.user });
});

// Resume Template Route
router.get("/resumeForm1/:id", authMiddleware, (req, res) => {
    res.json({ message: `You selected template ${req.params.id}`, user: req.user });
});

router.get("/resumeForm2/:id", authMiddleware, (req, res) => {
    res.json({ message: `You selected template ${req.params.id}`, user: req.user });
});

// Fill Resume Details Route
// router.post("/fillDetails", authMiddleware, (req, res) => {
//     res.json({ message: "Resume details updated", user: req.user, data: req.body });
// });

// Save Resume Route
// router.post("/saveResume", authMiddleware, (req, res) => {
//     res.json({ message: "Resume saved successfully", user: req.user });
// });

// Fetch User Resumes Route
// router.get("/myResumes", authMiddleware, (req, res) => {
//     res.json({ message: "Fetching your saved resumes", user: req.user });
// });

module.exports = router;
