const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Gym extends Model {}

Gym.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'user',
    //     key: "id",
    //   },
    // },

    gym_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
      // validate: {
      //   len: [1, 15],
      // },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'gym',
    // TableName: "GYM",
  }
);

module.exports = Gym;
