const { User } = require("../models");

const userData = [
  {
    username: "TJ",
    // full_name:"Tom Jones",
    email: "tjmax@gmail.com",
    gender: "Male",
    gym_id: 1,
    workout_id: 1,
    city_id: 1,
    password:"12345678"
  },
  {
    username: "PI",
    // full_name:"Patricia Ians",
    email: "pimin@gmail.com",
    gender: "Female",
    gym_id: 2,
    workout_id: 3,
    city_id: 2,
    password:"abcdefgh"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
