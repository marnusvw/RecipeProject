const axios = require("axios");
const db = require("./models/index.js");
const { sequelize, Recipe } = db;

const fetchAndInsert = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected");

    // Fetch from the API:
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=z"
    );

    const meals = res.data.meals;

    const recipeData = meals.map((meal) => ({
      title: meal.strMeal,
      image_url: meal.strMealThumb,
    }));
    console.log(recipeData);

    await Recipe.bulkCreate(recipeData, {
      validate: true,
      returning: true,
      ignoreDuplicates: true,
    });
    console.log(`Inserted ${recipeData.length} recipes successfully`);
  } catch (err) {
    console.log(err);
  } finally {
    await sequelize.close();
  }
};

fetchAndInsert();
