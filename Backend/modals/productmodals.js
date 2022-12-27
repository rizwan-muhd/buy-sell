// const { required } = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
      // required: true,
    },
  ],

  place: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const productDetails = mongoose.model("productDetails", productSchema);

module.exports = productDetails;
