const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.set("trust proxy", 1);

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 60 * 100 * 60 * 24,
      },
    })
  );

  // Controllers:
  const usersController = require("./controllers/usersController");
  app.use("/api/users", usersController);

  const recipesController = require("./controllers/recipesController");
  app.use("/api/recipes", recipesController);

  return app;
};
