// Dependencies:
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

// Config/middleware:
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Controllers:
const booksController = require("./controllers/usersController");
app.use("/api/users", booksController);

// Listen:
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
