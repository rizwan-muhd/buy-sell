const express = require("express");
// require("dotenv").config();
const { User, validate } = require("../modals/modal");
const bcrypt = require("bcrypt");

const router = express();

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "user with given email already exits" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "user created succesfully" });
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }

  // const userDetails = new userSchema({
  //   name: req.body.name,
  //   email: req.body.email,
  //   phone: req.body.phone,
  //   password: req.body.password,
  // });
  // userDetails
  //   .save()
  //   .then((data) => {
  //     res.status(200).json(data);
  //     // res.render("Home.js")
  //   })
  //   .catch((err) => {
  //     res.status(401).json(err);
  //   });
});
// router.post("/login", async (req, res) => {

//   try {
//     const
//   }
//   catch (error) {

//   }

// router.post("/login", async (req, res) => {

//   try {
//     const
//   }
//   catch (error) {

//   }
// console.log(req.body);

// const user = await User.findOne({
//   email: req.body.email,
//   password: req.body.password,
// });
// console.log(user);

// if (user) {
//   return res.status(201).json({
//     status: "ok",
//     user: true,
//     message: "succesfully logined",
//   });
// } else {
//   return res.status(401).json({
//     status: "error",
//     user: false,
//     message: "incorrect user or password",
//   });
// }
// });

module.exports = router;
