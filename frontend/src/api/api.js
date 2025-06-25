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

export const getRecipeByName = async (recipe_name) => {
  const response = await fetch(`${API_ENDPOINT}/recipes/${recipe_name}`);
  const jsonResponse = await response.json();

  return jsonResponse;
};

// User registration and login:
// Register a new user:
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        message: error.message || "Registration failed",
      };
    }

    const data = await response.json();

    return { success: true, ...data };
  } catch (err) {
    console.log(err);
  }
};

// Login an existing user:

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      return { success: false, message: error.message || "Login failed" };
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Check if a user is logged in:
export const checkLogin = async () => {
  try {
    const res = await fetch(`${API_ENDPOINT}/auth/session`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to check session");
    }
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
