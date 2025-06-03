const expressLoader = require("./express");
const passportLoader = require("./passport");

module.exports = async (app) => {
  // Load express middleware:
  const expressApp = await expressLoader(app);

  // Load passport middleware:
  const passport = await passportLoader(expressApp);

  app.use((err, req, res, next) => {
    const { message, status } = err;
    return res.status(status).send({ message });
  });
};
