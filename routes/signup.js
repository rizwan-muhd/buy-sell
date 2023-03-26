const express = require("express");
// require("dotenv").config();
const { User, validate } = require("../modals/modal");
const bcrypt = require("bcrypt");

const router = express();

//post request for signup
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
});

//get userdata
router.get("/getuser", async (req, res) => {
  const user_id = req.query.id;
  const user = await User.findOne({ _id: user_id });
  res.status(200).send({ user });
  // .catch((err) => {
  //   console.log(err);
  // });
});

router.post("/userupdate", (req, res) => {});
router.post("/addToFavourites", async (req, res) => {
  try {
    // console.log(req.body);
    const userData = await User.findOne({ _id: req.query.userId });
    userData.favourites.push(req.query.productId);
    await userData.save();
    res.status(201).json({
      status: true,
      message: "Done",
    });
  } catch (error) {
    res.status(401).json({
      status: false,
      message: "Cant fetch",
    });
  }
});
module.exports = router;
