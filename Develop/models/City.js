const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class City extends Model {}

City.init(
  {
    // define columns
