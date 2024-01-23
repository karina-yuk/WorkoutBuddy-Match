// import models
const City = require("./City");
const Gym = require("./Gym");
const Workout = require("./Workout");
const User = require("./User");
const ProfilePic = require("./ProfilePic");

City.belongsTo(User);        // CITY belongs to USER
User.hasOne(Workout);        // USER has one WORKOUT
ProfilePic.belongsTo(User, { foreignKey: 'profile_pic_id' });     // PROFILEPIC belongs to USER
User.belongsTo(Gym, { foreignKey: 'user_id' }); // USER belongs to GYM



