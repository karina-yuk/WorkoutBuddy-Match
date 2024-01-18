const seedCities = require("./city-seeds");
const seedGyms = require("./gym-seeds");
const seedWorkouts = require("./workout-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedCities();
  console.log("\n----- CITIES SEEDED -----\n");

  await seedGyms();
  console.log("\n----- GYMS SEEDED -----\n");

  await seedWorkouts();
  console.log("\n----- WORKOUTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
