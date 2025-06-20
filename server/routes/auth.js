const router = require("express").Router();

// Instantiate Service:
const AuthService = require("../services/AuthService");
const AuthServiceInstance = new AuthService();

module.exports = (app, passport) => {
  app.use("/api/auth", router);

  // Registration Endpoint:
  router.post("/register", async (req, res, next) => {
    try {
      const data = req.body;
      const response = await AuthServiceInstance.register(data);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // Login Endpoint:
  router.post(
    "/login",
    passport.authenticate("local"),
    async (req, res, next) => {
      try {
        res.status(200).send({ success: true, user: req.user });
      } catch (err) {
        next(err);
      }
    }
  );
};
