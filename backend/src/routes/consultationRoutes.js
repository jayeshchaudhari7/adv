const express = require("express");
const router = express.Router();
const Consultation = require("../models/Consultation");

/* CREATE CONSULTATION */
router.post("/", async (req, res) => {
  try {

    const consultation = new Consultation(req.body);

    const savedConsultation = await consultation.save();

    res.status(201).json({
      message: "Consultation booked successfully",
      data: savedConsultation
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});

/* GET ALL CONSULTATIONS */

router.get("/", async (req, res) => {

  try {

    const consultations = await Consultation.find().sort({ createdAt: -1 });

    res.json(consultations);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;