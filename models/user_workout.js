const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class user_workout extends Model {}

user_workout.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: false,
      },
    },
    Workout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "workout",
        key: "id",
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
