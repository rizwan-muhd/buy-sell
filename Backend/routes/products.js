const express = require("express");
const productSchema = require("../modals/productmodals");
const { User } = require("../modals/modal");
const multer = require("multer");
const path = require("path");

const router = express();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    let dest = path.join(__dirname, "../../public/uploads");
    callback(null, dest);
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // callback(null, Date.now() + file.originalname);
    callback(null, uniqueSuffix + "-" + file.originalname.match(/\..*$/)[0]);
  },
});

const upload = multer({ storage: storage });
// upload.single("imagefile"),
// router.post("/add", (req, res) => {
//   console.log("new body" + req.body);
// });

router.post("/addproduct", upload.single("image"), async (req, res) => {
  try {
    console.log(__dirname);

    console.log("enter in try");

    console.log(req.body);
    console.log(req.files);

    const items = await new productSchema({
      productname: req.body.productname,
      userId: req.body.userId,
      category: req.body.category,
      price: req.body.price,
      image: req.file.filename,
      // image: req.files,
      date: req.body.date,
      place: req.body.place,
    });

    items
      .save()
      .then((res) => res.json("products added"))
      .catch((err) => res.status(400).json(`error:${err}`));
  } catch (err) {
    console.log(err);
  }

  //   .then((data) => {
  //   res
  //     .status(200)
  //     .json(data)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log("data:" + data);
  // });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  //   } catch (err) {
  //     console.log(err);
  //   }
});

router.get("/getproduct", async (req, res) => {
  const id = req.query.id;
  console.log(id);
  // try {
  const product = await productSchema.findById(
    { _id: id }
    // if (err) {
    //   res.send(err);
    // } else {
    //   res.send(result);
    // }
  );
  console.log(product);
  const user = await User.findOne({ _id: product.userId });
  res.status(200).json({ product, user });

  // const product = await productSchema.findById({ _id: id });
  // res.status(200).json(product);
  // } catch (err) {
  // console.log(err);
  // }
});

router.get("/ownproducts", async (req, res) => {
  const id = req.query.id;
  const products = await productSchema.find({ userId: id });
  res.status(200).json({ products });
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

router.delete("/deleteproduct", async (req, res) => {
  const id = req.query.id;
  await productSchema.deleteOne({ _id: id });
});

module.exports = router;
