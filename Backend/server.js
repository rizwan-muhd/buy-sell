require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const md5 = require("md5");

const signupRoute = require("./routes/routes");
const loginRoute = require("./routes/login");

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

app.listen(5000, () => {
  console.log("server running on port 5000");
});
