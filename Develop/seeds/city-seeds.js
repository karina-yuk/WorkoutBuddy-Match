const { City } = require("../models");

const cityData = [
  {
    city_name: "TORONTO",
  },
  {
    city_name: "RICHMOND HILL",
  },
  {
    city_name: "MARKHAM",
  },
  {
    city_name: "SCARBOROUGH",
  },
  {
    city_name: "BRAMPTON",
  },
  {
    city_name: "AJAX",
  },
  {
    city_name: "OAKVILLE",
  },
  {
    city_name: "MISSISSAUGA",
  },
  {
    city_name: "BURLINGTON",
  },
  {
    city_name: "MILTON",
  },
  {
    city_name: "CALEDON",
  },
  {
    city_name: "AURORA",
  },
  {
    city_name: "HALTON HILLS",
  },
  {
    city_name: "NEWMARKET",
  },
  {
    city_name: "OSHAWA",
  },
  {
    city_name: "YORK",
  },
  {
    city_name: "VAUGHAN",
  },
];

const seedCities = () => City.bulkCreate(cityData);

module.exports = seedCities;
