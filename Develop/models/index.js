// import models
const City = require("./City");
const Gym = require("./Gym");
const Workout = require("./Workout");
const User = require("./User");
const ProfilePic = require("./ProfilePic");

User.hasOne(City);        // USER has one CITY
User.hasOne(Gym);            // USER has one GYM
User.hasOne(Workout);        // USER has one WORKOUT
User.hasOne(ProfilePic);     // USER has one PROFILEPIC
User.belongsToMany(Gym, { through: 'UserGym', foreignKey: 'user_id' }); // GYM belongs to many USER, UserGym auto generated when using belongstoMany
User.belongsToMany(Workout, { through: 'UserWorkout', foreignKey: 'user_id' }); // WORKOUT belongs to many USER, UserWorkout auto generated when using belongstoMany

