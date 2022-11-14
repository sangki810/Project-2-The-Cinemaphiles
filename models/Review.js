const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Review extends Model {}

Review.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      like: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
