const router = require("express").Router();
const { User, validate } = require("../modals/modal");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const passwordComplexity = require("joi-password-complexity");
const passport = require("passport");

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).send({ message: "invalid email address" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).send({ message: "invalid password" });
    }
    console.log("token creating");

    const token = user.generateAuthToken();
    console.log(token);

    console.log(user);
    res
      .status(200)
      .send({ data: token, user: user, message: "logged successfully" });
  } catch (error) {
    res.status(500).send({ message: "internal error" });
  }
});
// password reset

router.put("/resetpassword", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(409).send({ message: "invalid email address" });
    }
    let token = await token.findOne({ userId: user_id });
    if (!token) {
      const token = user.generateAuthToken();
    }
  } catch (error) {}
});

// const validate = (data) => {
//   const schema = Joi.oblect({
//     email: Joi.string().email().required().label("email"),
//     password: Joi.string().required().label("password"),
//   });
//   return schema.validate(data);
// };
router.get("/Googlelogin/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "succesfully loged in",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "not authorized" });
  }
});

router.get("/Googlelogin/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "login in failure",
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    // successRedirect: "/Googlelogin/success",
    failureRedirect: "/Googlelogin/failed",
  })
);

router.get("/google", passport.authenticate("google", ["profile", "email"]));

module.exports = router;
