const { configureStore } = require("@reduxjs/toolkit");
const recipeReducer = require("../features/recipeSlice");

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});
