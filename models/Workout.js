const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },
     workout_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: {
      //   len: [1, 30],
      // },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "Workout",
    //TableName: 'WORKOUT',
  }
);

module.exports = Workout;
