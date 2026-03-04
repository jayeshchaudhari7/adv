const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const consultationRoutes = require("./src/routes/consultationRoutes");
app.use("/api/consultationLeads", consultationRoutes);
const leadRoutes = require("./src/routes/leadRoutes");
app.use("/api/leads", leadRoutes);
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});