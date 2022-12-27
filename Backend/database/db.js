const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = () => {
  const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todoapp.ij4lfkd.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected succesfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected ");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Error in connection", error.message);
  });
};

module.exports = connection;
