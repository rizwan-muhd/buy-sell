require("dotenv").config();
const express = require("express");

const cors = require("cors");
const connection = require("./database/db.js");

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const addproductRoute = require("./routes/products");
const PORT = process.env.PORT;
const app = express();

connection();

app.use(express.json());
app.use(cors());
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", addproductRoute);

if (PORT) {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
}

module.exports = app;
