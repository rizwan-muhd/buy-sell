require("dotenv").config();
const express = require("express");

const cors = require("cors");
const connection = require("./database/db.js");

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const addproductRoute = require("./routes/products");

const app = express();

connection();

app.use(express.json());
app.use(cors());
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", addproductRoute);

app.listen(5000, () => {
  console.log("server running on port 5000");
});
