const passport = require("../loaders/passport");
const userRouter = require("./user");
const authRouter = require("./auth");

module.exports = (app, passport) => {
  authRouter(app, passport);
  userRouter(app);
};
