const mongoose = require("mongoose");
const { databaseServer } = require("./utils/config.js.js");

try {
  mongoose.connect(
    "mongodb://heroku_bqjqx9vz:4efcmg3gec5a3a1s3v0lc90mj2@ds031632.mlab.com:31632/heroku_bqjqx9vz",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  );
  console.log("Connected to database!");
} catch (e) {
  console.log("Connection failed!");
}
