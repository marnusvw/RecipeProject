const passport = require("../loaders/passport");
const userRouter = require("./user");
const authRouter = require("./auth");
const recipeRouter = require("./recipe");
const test = require("./test");
module.exports = (app, passport) => {
  authRouter(app, passport);
  userRouter(app);
  recipeRouter(app);
  test(app);
};
