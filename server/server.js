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

const db = require("./models"); // Adjust path if needed

app.get("/api/db-test", async (req, res) => {
  try {
    // Use Sequelize's authenticate method to check connection
    await db.sequelize.authenticate();

    // You can also run a simple raw query as confirmation
    const [result] = await db.sequelize.query("SELECT NOW();");

    res.json({
      connected: true,
      message: "Database connection successful!",
      time: result[0].now,
    });
  } catch (error) {
    console.error("DB connection error:", error);
    res.status(500).json({
      connected: false,
      message: "Database connection failed",
      error: error.message,
    });
  }
});

// Listen:
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

startServer();
