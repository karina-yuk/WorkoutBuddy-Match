const { Workout } = require("../models");

const workoutData = [
  {
    workout_name: "Strength training",
  },
  {
    workout_name: "Aerobic exercise",
  },
  {
    workout_name: "Yoga",
  },
  {
    workout_name: "High-intensity training",
  },
  {
    workout_name: "Pilates",
  },
  {
    workout_name: "Walking",
  },
  {
    workout_name: "Running",
  },
  {
    workout_name: "Functional strength training",
  },
  {
    workout_name: "Core training",
  },
  {
    workout_name: "Cycling",
  },
  {
    workout_name: "Cardio",
  },
  {
    workout_name: "Weight lifting",
  },
];

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;
