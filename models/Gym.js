const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Gym extends Model {}

Gym.init(
  {
    gym_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },
    gym_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [15],
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'gym',
  }
);

module.exports = Gym;
