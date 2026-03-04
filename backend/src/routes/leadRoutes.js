const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");
const { body, validationResult } = require('express-validator');

router.post('/',
  [
    body('name').isString().trim().isLength({ min: 2 }),
    body('email').isEmail().normalizeEmail(),
    body('phone').optional().isString().trim(),
    body('budget').optional().isString().trim()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const newLead = new Lead(req.body);
      await newLead.save();
      res.status(201).json({ message: 'Lead saved' });
    } catch {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

module.exports = router;