const express = require("express");
const productSchema = require("../modals/productmodals");
const { User } = require("../modals/modal");
const multer = require("multer");
// const path = require("path");

const router = express();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(
      null,
      "/home/rizwan/Documents/react/React_tutorial_olx_clone/public/uploads"
    );
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // callback(null, Date.now() + file.originalname);
    callback(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
// upload.single("imagefile"),
// router.post("/add", (req, res) => {
//   console.log("new body" + req.body);
// });

router.post("/addproduct", upload.array("image", 5), async (req, res) => {
  console.log("enter in server");

  const items = await new productSchema({
    productname: req.body.productname,
    userId: req.body.userId,
    category: req.body.category,
    price: req.body.price,
    // image: req.file.originalname,
    image: req.files.name,
    date: req.body.date,
    place: req.body.place,
  });

  // console.log("data" + items);

  items
    .save()
    .then((res) => res.json("products added"))
    .catch((err) => res.status(400).json(`error:${err}`));

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
