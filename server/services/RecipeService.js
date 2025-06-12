const { Recipe, Ingredient } = require("../models");
const { createError } = require("http-errors");
module.exports = class RecipeService {
  async getAll() {
    try {
      const recipes = await Recipe.findAll();
      return recipes;
    } catch (err) {
      console.log(err);
    }
  }
  async getByName(recipe_name) {
    try {
      const foundRecipe = await Recipe.findOne({
        where: { recipe_name },
        include: [{ model: Ingredient, as: "ingredients" }],
      });
      if (!foundRecipe) {
        throw createError(404);
      }
      return foundRecipe;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
