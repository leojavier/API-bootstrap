const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"]
  },
  description: {
    type: String,
    required: [true, "Please add description"]
  },
  weeks: {
    type: String,
    required: [true, "Please add number of weeks"]
  },
  tuition: {
    type: Number,
    required: [true, "Please add a tuition cost"]
  },
  minimumSkill: {
    type: String,
    required: [true, "Please add a minimum skills"],
    enum: ["beginner", "intermediate", "advanced"]
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: "bootcamp",
    require: true
  }
});

module.exports = mongoose.model("course", CourseSchema);
