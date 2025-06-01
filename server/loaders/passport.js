const passport = require("passport");
const LocalStrategy = require("passport-local");
const AuthService = require("../services/AuthService");

const AuthService = require("../services/AuthService");
const AuthServiceInstance = new AuthService();

module.exports = (app) => {
  // Init passport:
  app.use(passport.initialize());
  app.use(passport.session());

  // Set method to serialize data to store in a cookie:
  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  // Set method to deserialize data stored in a cookie and attach it to req.user:
  passport.deserializeUser((user_id, done) => {
    done(null, { user_id });
  });

  // Configure local strategy to be used for local login:
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await AuthServiceInstance.login({
          email: username,
          password,
        });
      } catch (err) {
        return done(err);
      }
    })
  );
  return passport;
};
