const passport = require("../loaders/passport");
const userRouter = require("./user");
const authRouter = require("./auth");
const recipeRouter = require("./recipe");

module.exports = (app, passport) => {
  authRouter(app, passport);
  userRouter(app);
  recipeRouter(app);
};
ssssssssssssssss;
