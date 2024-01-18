const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Workout extends Model {}

Workout.init(
  {
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },
     workout_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [30],
      },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'workout',
  }
);

module.exports = Workout;
