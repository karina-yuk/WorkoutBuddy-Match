const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../config/connections');


class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
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
      },
    },

    // full_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //   len: [1, 45],
    //   },
    // },
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
      // allowNull: false,
      // validate: {
      //   isIn: [['M', 'F', 'O', 'N']],
      // },
    },
    gym_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'gym',
        key: 'id',
      },
    },
    workout_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'workout',
        key: 'id',
      },
    },
    city_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'city',
        key: 'id',
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 50],
      },
    },

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
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    // TableName: 'USER',
  }
);

module.exports = User;
