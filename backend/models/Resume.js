const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resumeData: { type: Object, required: true },
});

module.exports = mongoose.model("Resume", ResumeSchema);
