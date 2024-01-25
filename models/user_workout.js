const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const User = require("./User");
const Workout = require("./Workout");

class user_workout extends Model {}

user_workout.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'user_id',
              unique: false
            }
          },
          Workout_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'workout',
              key: 'workout_id',
              unique: false
            }
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip'
      }

    );
    module.exports = user_workout;