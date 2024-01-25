const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class user_workout extends Model {}

user_workout.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "user_id",
        unique: false,
      },
    },
    Workout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Workout",
        key: "workout_id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_workout",
  }
);
module.exports = user_workout;
