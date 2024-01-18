const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class ProfilePic extends Model {}

ProfilePic.init(
  {
    profile_pic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'user_id',
      },
      image_url: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    username: {
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
    modelName: 'profilepic',
  }
);

module.exports = ProfilePic;
