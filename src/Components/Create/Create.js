import React, { useState } from "react";
import "./Create.css";
import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {
  const history = useHistory();
  const userId = localStorage.getItem("userId");

  const [productname, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [place, setPlace] = useState("");
  const [filename, setFilename] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    var d = new window.Date();
    const currentdate = d.toDateString();
    // setDate(currentdate);
    // console.log(currentdate);
    console.log(filename[3]);

    // console.log(productname, category, price, place, image);

    const form_data = new FormData();

    form_data.append("productname", productname);
    form_data.append("category", category);
    form_data.append("price", price);
    form_data.append("place", place);
    form_data.append("image", filename);
    form_data.append("date", currentdate);
    form_data.append("userId", userId);
    // console.log(form_data);

    axios
      .post("http://localhost:5000/api/addproduct", form_data)
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid md={12}>
        <div className="centerDiv">
          <form
            onSubmit={handleSubmit}
            action="/"
            method="post"
            encType="multipart/form-data"
          >
            <label htmlFor="fname">Product Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="productname"
              // defaultValue=""
              placeholder="Product name"
              value={productname}
              onChange={(e) => setProductName(e.target.value)}
            />
            {/* <TextField
              id="standard-basic"
              label="Product Name"
              variant="standard"
              // className="input"
              type="text"
              // id="fname"
              name="productname"
              value={productname}
              onChange={(e) => setProductName(e.target.value)}
            /> */}
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              // defaultValue="John"
              placeholder="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="price"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Place</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="place"
              // defaultValue=""
              placeholder="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <br />

            <br />
            {filename.map((obj) => {
              console.log(obj);
              return obj;
              // <img
              //   alt="Posts"
              //   width="200px"
              //   height="200px"
              //   src={obj ? URL.createObjectURL(obj) : null}
              // ></img>
            })}
            {/* <img
              alt="Posts"
              width="200px"
              height="200px"
              src={filename ? URL.createObjectURL(filename) : null}
            ></img> */}

            <br />
            <input
              type="file"
              multiple
              name="image"
              onChange={(e) => setFilename(e.target.files)}
            />
            <br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Create;
