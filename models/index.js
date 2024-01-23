// import models
const ProfilePic = require("./ProfilePic");
const User = require("./User");
const Gym = require("./Gym");
const City = require("./City");
const Workout = require("./Workout");

ProfilePic.belongsTo(User, {
    foreignKey: "user_id",
    as: "profile_pic",
});

Gym.hasMany(User, {
    foreignKey: "gym_id",
    as: "gym_users",
});

Workout.hasMany(User, {
    foreignKey: "workout_id",
    as: "workout_users",
});

User.hasOne(City, {
    foreignKey: "city_id",
    as: "city",
});


module.exports = { City, Gym, Workout, User, ProfilePic };
