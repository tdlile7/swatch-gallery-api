const { Color } = require("./models/Color");
const mongoose = require("mongoose");
const config = require("config");
const colors = require("./data/colors");

//Initializes database with color seed data
async function seed() {
  const db = config.get("mongoURI");

  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  try {
    //Purge database of pre-exist data
    await Color.deleteMany();

    //Saturate database by saving seed data
    await Color.insertMany([...colors].splice(0, 100));
    await Color.insertMany([...colors].splice(100));

    mongoose.disconnect();
    console.log("Database has been seeded!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

seed();
