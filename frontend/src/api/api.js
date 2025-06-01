import { API_ENDPOINT } from ".";

// Users API:
export const getUsers = async () => {
  const response = await fetch(`${API_ENDPOINT}/users`, {
    headers: {
      "content-type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

// Recipes API:
export const getAllRecipes = async () => {
  const response = await fetch(`${API_ENDPOINT}/recipes`);
  const jsonResponse = await response.json();

  return jsonResponse;
};
