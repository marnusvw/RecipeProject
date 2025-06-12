const router = require("express").Router();
const RecipeService = require("../services/RecipeService");
const RecipeServiceInstance = new RecipeService();

module.exports = (app) => {
  app.use("/api/recipes", router);

  router.get("/", async (req, res, next) => {
    try {
      const response = await RecipeServiceInstance.getAll();
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  router.get("/:recipe_name", async (req, res, next) => {
    try {
      const { recipe_name } = req.params;
      const response = await RecipeServiceInstance.getByName(recipe_name);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  });
};
