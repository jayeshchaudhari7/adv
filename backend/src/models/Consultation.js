const mongoose = require("mongoose");

const ConsultationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  date: {
    type: String
  },
  time: {
    type: String
  },
  timezone: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Consultation", ConsultationSchema);