const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resumeData: { type: Object, required: true },
}, {timestamps: true});

module.exports = mongoose.model("Resume", ResumeSchema);
