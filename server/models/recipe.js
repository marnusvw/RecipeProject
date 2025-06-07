module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      recipe_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      recipe_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      recipe_image: {
        type: DataTypes.TEXT,
      },
      recipe_description: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "recipes",
      timestamps: false,
    }
  );
  return Recipe;
};
