
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');


class City extends Model {}

City.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [1, 15],
      // },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'city',
    // TableName: 'CITY'
  }
);

module.exports = City;

