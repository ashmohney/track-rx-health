const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/medicationslist"
);

const medsSeed = [
  {
    name: "Ibuprophen",
    frequency: "Every Morning",
    notes: "May take as needed, not to exceed 800mg",
    date: new Date(Date.now())
  }
];

db.Meds.remove({})
  .then(() => db.Meds.collection.insertMany(medsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  });

const userSeed = [
  {
    username: "user1",
    password: "password"
  },
  {
    username: "user2",
    password: "password"
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  });
