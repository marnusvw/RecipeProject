const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = recipeSlice.actions;
export default recipeSlice.reducer;
