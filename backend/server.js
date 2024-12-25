const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  state: String,
  nationality: String,
  age: Number,
  phone: String,
  city: String,
  districtName: String,
  policeStation: String,
  grade: String,
  fatherName: String,
  motherName: String,
  fatherOccupation: String,
});

const User = mongoose.model("User", userSchema);

app.post("/submit-form", async (req, res) => {
  try {
    const userData = new User(req.body);
    await userData.save();
    res
      .status(200)
      .json({ message: "Data saved successfully", data: userData });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error });
  }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);

app.post("/submit", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();
    res
      .status(200)
      .json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to submit form" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
