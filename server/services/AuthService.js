const createError = require("http-errors");
const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = class AuthService {
  async register(data) {
    const { email } = data;
    const SALT_ROUNDS = 12;

    try {
      const existingUser = await User.findOne({ where: { email } });

      // Check if the user exists:
      if (existingUser) {
        throw createError(409, "Email already in use");
      }

      // Create a new user:
      const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
      data.password = hashedPassword;
      const newUser = await User.create(data);
      return newUser;
    } catch (err) {
      throw createError(500, err.message || err);
    }
  }
  async login(data) {
    const { email, password } = data;

    try {
      // Find user by email:

      const foundUser = await User.findOne({ where: { email } });

      // Check if the user exists:
      if (!foundUser) {
        throw createError(401, "Incorrect password or email");
      }

      // Compare hashed passwords:
      const isMatch = await bcrypt.compare(password, foundUser.password);
      if (!isMatch) {
        throw createError(401, "Incorrect password or email");
      }
      return foundUser;
    } catch (err) {
      throw createError(500, err.message || err);
    }
  }
};
