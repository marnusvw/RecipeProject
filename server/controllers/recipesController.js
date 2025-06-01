const recipes = require("express").Router();
const db = require("../models");
const { Recipe } = db;

// Get all recipes:
recipes.get("/", async (req, res) => {
  try {
    const foundRecipes = await Recipe.findAll({ limit: 10 });
    res.status(200).json(foundRecipes);
  } catch (err) {
    res.status(500).send("Server Error");
    console.log(err);
  }
});

module.exports = recipes;
