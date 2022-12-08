const router = require("express").Router();
const { User } = require("../modals/modal");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  try {
    // console.log("entered in try");
    // console.log(req.body);
    // const { error } = validate(req.body);
    // console.log("body", error);
    // const error = req.body;
    // console.log(req.body);

    // if (error) {
    //   return res.status(400).send({ message: error.details[0].message });
    // }
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

    // const email = req.body.email;
    // router.get("/login", async (req, res, email) => {
    //   // console.log(req.body);

    //   await User.findOne({ email: email }, (err, result) => {
    //     if (err) {
    //       res.send(err);
    //     }
    //     res.status(200).send(result);
    //   });
    // });

    //   await User.findOne({ email: req.body.email }, (err, result) => {
    //     if (err) {
    //       res.send(err);
    //     }
    //     res.status(200).send(result);
    //   });
  } catch (error) {
    res.status(500).send({ message: "internal error" });
  }
});

const validate = (data) => {
  const schema = Joi.oblect({
    email: Joi.string().email().required().label("email"),
    password: Joi.string().required().label("password"),
  });
  return schema.validate(data);
};

module.exports = router;
