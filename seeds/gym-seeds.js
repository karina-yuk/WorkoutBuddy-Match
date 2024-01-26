const { Gym } = require("../models");

const gymData = [
  {
    gym_name: "LA FITNESS",
  },
  {
    gym_name: "GOODLIFE FITNESS",
  },
  {
    gym_name: "YMCA",

  },
  {
    gym_name: "ORANGETHEORY FITNESS",
  },
  {
    gym_name: "BODY VISION FITNESS",

  },
  {
    gym_name: "UP & FIT FITNESS",
  },
];

const seedGyms = () => Gym.bulkCreate(gymData);

module.exports = seedGyms;
