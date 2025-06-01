const expressLoader = require("./express");
const passportLoader = require("./passport");

module.exports = async (app) => {
  // Load express middleware:
  const expressApp = await expressLoader(app);

  // Load passport middleware:
  const passport = await passportLoader(app);
};
