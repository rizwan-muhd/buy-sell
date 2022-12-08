const express = require("express");
const productSchema = require("../modals/productmodals");
const multer = require("multer");
const path = require("path");

const router = express();

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(
//       null,
//       "/home/rizwan/Documents/react/React_tutorial_olx_clone/public/uploads"
//     );
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.filename + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });
// upload.single("imagefile"),
router.post("/addproduct", async (req, res) => {
  // try {
  console.log(req.body);
  console.log(req.files);

  // const items = await new productSchema({
  //   productname: req.body.productname,
  //   userId: req.body.userId,
  //   category: req.body.category,
  //   price: req.body.price,
  //   image: req.files.imagefile,
  //   date: req.body.date,
  //   place: req.body.place,
  // });

  // items.save().then((data) => {
  //   res.status(200).send(data);
  //   // .catch((err) => {
  //   //   console.log(err);
  //   // });
  //   console.log("data:" + data);
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
});

router.get("/getproduct", async (req, res) => {
  const id = req.query.id;
  console.log(id);
  try {
    const product = await productSchema.findById(
      { _id: id }
      // if (err) {
      //   res.send(err);
      // } else {
      //   res.send(result);
      // }
    );
    res.status(200).json(product);

    // const product = await productSchema.findById({ _id: id });
    // res.status(200).json(product);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getproducts", async (req, res) => {
  const page = parseInt(req.query.page || "0");
  const total = await productSchema.countDocuments({});
  // console.log(total_page);

  const page_size = 7;

  const products = await productSchema
    .find({})
    .limit(page_size)
    .skip(page_size * page);
  // .then((product) => {
  res.json({ totalPages: Math.ceil(total / page_size), products });
  // })
  // .catch((err) => {
  //   res.status(400).json(`Error:${err}`);
  // });
  // console.log(products);
});

router.get("/getquickproducts", async (req, res) => {
  console.log("entered in quick");

  try {
    const page_size = 5;
    await productSchema
      .find({}, (err, result) => {
        if (err) {
          res.send(err);
        }
        res.status(200).send(result);
      })
      .sort({ _id: -1 })
      .limit(page_size);
  } catch (error) {
    res.status(400).send("not found");
  }
});

module.exports = router;
