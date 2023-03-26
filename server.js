require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require("cors");
const connection = require("./database/db.js");
const passportSetup = require("./passport");
const session = require("express-session");

const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const PORT = process.env.PORT;
const addproductRoute = require("./routes/products");
const app = express();

connection();

app.use(
  session({
    secret: "our secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cookieSession({
    name: "session",
    keys: ["rizwan"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
// passport.use(
//   session({
//     secret: "our secret",
//     resave: false,
//     saveUninitialized: false,
//   })
// );
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", addproductRoute);

if (PORT) {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
}

module.exports = app;
