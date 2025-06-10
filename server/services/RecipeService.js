const { Recipe } = require("../models");

module.exports = class RecipeService {
  async getAll() {
    try {
      const recipes = await Recipe.findAll();
      console.log("Hello World");
      return recipes;
    } catch (err) {
      console.log(err);
    }
  }
};
