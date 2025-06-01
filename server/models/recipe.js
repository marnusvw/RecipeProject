module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image_url: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "recipes",
      timestamps: false,
    }
  );
  return Recipe;
};
