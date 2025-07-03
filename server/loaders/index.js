const expressLoader = require("./express");
const passportLoader = require("./passport");
const routeLoader = require("../routes");
module.exports = async (app) => {
  // Load express middleware:
  const expressApp = await expressLoader(app);

  // Load passport middleware:
  const passport = await passportLoader(expressApp);

  // Load API route handler:
  await routeLoader(app, passport);

  app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({ message });
  });
};
