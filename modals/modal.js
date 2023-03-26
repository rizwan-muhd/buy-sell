const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

// require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requred: true,
  },
  email: {
    type: String,
    requred: true,
  },
  phone: {
    type: Number,
    requred: true,
  },
  password: {
    type: String,
    requred: true,
  },
  favourites: [{ type: mongoose.Schema.ObjectId, ref: "productDetails" }],
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "1d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("name"),
    email: Joi.string().email().required().label("email"),
    phone: Joi.number().required().label("phone"),
    password: passwordComplexity().required().label("password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
