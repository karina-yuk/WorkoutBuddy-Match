// import models
const City = require("./City");
const Gym = require("./Gym");
const Workout = require("./Workout");
const User = require("./User");
const ProfilePic = require("./ProfilePic");
const { } = require('sequelize');

User.hasOne(City, { foreignKey: 'city_id' }); // USER has one CITYUser.hasOne(Gym); // USER has one GYM
User.hasMany(Workout); // USER has many WORKOUT
ProfilePic.belongsTo(User, {
    foreignKey: {
      name: 'userId', // Specify foreign key
      allowNull: false,
    },
  });
  Gym.hasMany(User, {
    foreignKey: 'gym_id',
    onDelete: 'CASCADE',
  });
  Workout.hasMany(User, {
    foreignKey: 'gym_id',
    onDelete: 'CASCADE',
  });

