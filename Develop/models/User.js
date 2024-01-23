const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const Gym = require('./Gym');

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 15],
      },
    },

    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1, 45],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      validate: {
        isIn: [['M', 'F', 'O', 'N']],
      },
    },
    gym_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Gym,
        key: 'gym_id',
      },
    },
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Workout,
        key: 'workout_id',
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,8],
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
        TableName: 'USER',

  }
);

module.exports = User;
