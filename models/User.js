const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connections');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
    id: {
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
        len: [1, 50],
        len: [1, 50],
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
      type: DataTypes.STRING,
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isIn: [['M', 'F', 'O', 'N']],
      // },
      // validate: {
      //   isIn: [['M', 'F', 'O', 'N']],
      // },
    },
    gym_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Gym',
        model: 'Gym',
        key: 'gym_id',
      },
    },
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Workout',
        model: 'Workout',
        key: 'workout_id',
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 50],
        len: [8, 50],
      },
    },
    gym_id: { // foreign key
      type: DataTypes.INTEGER,
      references: {
        model: 'gym',
        key: 'id',
      },
    }
    gym_id: { // foreign key
      type: DataTypes.INTEGER,
      references: {
        model: 'gym',
        key: 'id',
      },
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
    // TableName: 'USER',
    modelName: 'User',
    // TableName: 'USER',
  }
);

module.exports = User;
