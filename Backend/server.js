require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const md5 = require("md5");

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const addproductRoute = require("./routes/products");

const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/olx", {
    useNewUrlParser: true,
  });
}
// console.log(md5(123));

app.use(express.json());
app.use(cors());
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", addproductRoute);

app.listen(5000, () => {
  console.log("server running on port 5000");
});
