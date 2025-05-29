const users = require("express").Router();
const db = require("../models");
const { User } = db;

// Get all users:
users.get("/", async (req, res) => {
  try {
    const foundUser = await User.findAll();
    res.status(200).json(foundUser);
  } catch (err) {
    res.status(500).send("Server error");
    console.log(err);
  }
});

// Add a user:
users.post("/", async (req, res) => {
  console.log("Req Body: ", req.body);
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if email and password are provided:
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // If required fields are provided, create a new user:
    const newUser = User.create({
      password,
      firstName,
      lastName,
      email,
    });
    return res.status(201).send(newUser); // Send back the new user object.
  } catch (err) {
    res.status(500).send("Failed to create user");
    console.log(err);
  }
});

module.exports = users;
