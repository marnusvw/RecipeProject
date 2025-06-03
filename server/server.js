// Dependencies:
const express = require("express");
const app = express();

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// Config/middleware:
const PORT = process.env.PORT || 4000;
const loaders = require("./loaders");

async function startServer() {
  // Init application  loaders:
  loaders(app);
}
// Listen:
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

startServer();
