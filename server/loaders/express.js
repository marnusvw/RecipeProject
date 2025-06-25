const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

module.exports = (app) => {
  app.use(
    cors({
      origin: "https://recipe-project-tvqz.vercel.app",
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.set("trust proxy", 1);

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "defaultSecret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false, // set to true if using HTTPS
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      },
    })
  );
  return app;
};
