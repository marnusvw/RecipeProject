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
  router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        err.status = 500;
        return next(err);
      }

      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: info?.message || "Login failed" });
      }

      req.login(user, (err) => {
        if (err) {
          err.status = 500;
          return next(err);
        }
        return res.status(200).json({ loggedIn: true, user });
      });
    })(req, res, next);
  });

  // Check if a user is logged in:
  router.get("/session", (req, res) => {
    if (req.isAuthenticated()) {
      return res.status(200).json({ loggedIn: true, user: req.user });
    }
    return res.status(200).json({ loggedIn: false, user: null });
  });
};
