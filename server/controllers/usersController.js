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
// Delete a user:
users.delete("/:id", async (req, res) => {
  console.log(`Deleting user: ${req.params.id}`);
  try {
    const deleted = await User.destroy({
      where: { user_id: req.params.id },
    });

    if (deleted) {
      res.status(200).json({ message: "User deleted successfully." });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

module.exports = users;
