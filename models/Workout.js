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
        len: [1, 30],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'user_id',
      },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'workout',
    TableName: 'WORKOUT',
  }
);

module.exports = Workout;

