const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    "Ingredient",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      ingredient: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recipe_id: {
        type: DataTypes.BIGINT,
        references: {
          model: "Recipes",
          key: "recipe_id",
        },
      },
    },
    {
      tableName: "ingredients",
      timestamps: false,
    }
  );
  return Ingredient;
};
