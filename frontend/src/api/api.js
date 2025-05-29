import { API_ENDPOINT } from ".";

export const getUsers = async () => {
  const response = await fetch(`${API_ENDPOINT}/users`);
  const jsonResponse = await response.json();

  return jsonResponse;
};
