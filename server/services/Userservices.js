const createError = require("http-errors");
const UserModel = require("../models/user");

module.exports = class UserService {
  async get(data) {
    const { id } = data;

    try {
      const user = await UserModel.findOne({ where: { id } });
      if (!user) {
        throw createError(404, "User record not found");
      }
      return user;
    } catch (err) {
      throw err;
    }
  }

  async update(data) {
    try {
      const { id, ...params } = data;

      const [affectedRows, affectedCount] = await UserModel.update(params, {
        where: { id },
        returning: true,
      });

      if (affectedCount === 0) {
        throw new Error("No user found with that ID");
      }

      return affectedRows[0]; // Return the updated user.
    } catch (err) {
      throw err;
    }
  }
};
