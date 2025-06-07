const axios = require("axios");
const db = require("./models/index.js");
const { application } = require("express");
const { sequelize, Recipe } = db;
const qs = require("qs");
const { json } = require("sequelize");

const clientId = "3cdf897a251145798c7dafe22ac81dde";
const clientSecret = "0d591d01632549cab3ac6b65acd7424d";
const tokenUrl = "https://oauth.fatsecret.com/connect/token";
const authString = Buffer.from(`${clientId}:${clientSecret}`).toString(
  "base64"
);

const options = {
  method: "POST",
  url: tokenUrl,
  headers: {
    Authorization: `Basic ${authString}`,
    "Content-type": "application/x-www-form-urlencoded",
  },
  data: qs.stringify({
    grant_type: "client_credentials",
    scope: "basic",
  }),
};

const getToken = async () =>
  await axios(options)
    .then((response) => {
      const token = response.data.access_token;
      return token;
    })
    .catch((err) => console.log(err.response?.data || err.message));

const fetchAndInsert = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected");

    // Get the access token:
    const token = await getToken();

    // Fetch from the api:
    const response = await axios.get(
      "https://platform.fatsecret.com/rest/recipes/search/v3",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: {
          format: "json",
        },
      }
    );

    const recipeData = response.data.recipes.recipe.map((recipe) => ({
      recipe_id: recipe.recipe_id,
      recipe_name: recipe.recipe_name,
      recipe_description: recipe.recipe_description,
      recipe_image: recipe.recipe_image,
    }));

    console.log(recipeData);
    await Recipe.bulkCreate(recipeData, {
      validate: true,
      returning: true,
      ignoreDuplicates: true,
    });
    console.log(`Inserted ${recipeData.length} recipes successfully`);
  } catch (err) {
    console.log(err.message);
  } finally {
    await sequelize.close();
  }
};

fetchAndInsert();
