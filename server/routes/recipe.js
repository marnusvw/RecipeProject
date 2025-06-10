const router = require("express").Router();
const RecipeService = require("../services/RecipeService");
const RecipeServiceInstance = new RecipeService();

module.exports = (app) => {
  app.use("/api/recipes", router);

  router.get("/", async (req, res, next) => {
    try {
      const response = await RecipeServiceInstance.getAll();
      console.log(response);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};
