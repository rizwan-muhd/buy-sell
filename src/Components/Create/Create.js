//importing components from react
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

//css importing
import "./Create.css";

//mui components importing
import Grid from "@mui/material/Grid";
// import { set } from "react-hook-form";
// import TextField from "@mui/material/TextField";

//main function
const Create = () => {
  const history = useHistory();

  //user id store in local storage
  const userId = localStorage.getItem("userId");

  // console.log("userid" + userId);

  //state components initialize
  const [filename, setFilename] = useState([]);
  const [productname, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState([]);

  const imagehandleChange = (e) => {
    // setFilename(e.target.files);
    setImage(e.target.files[0]);
    console.log(e.target.files);

    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map(
        (file) => URL.createObjectURL(file),

        setFilename((previmage) => previmage.concat(fileArray)),
        Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
        // console.log(filename)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var d = new window.Date();
    const currentdate = d.toDateString();

    console.log(currentdate);
    // console.log(filename);
    // console.log(productname, category, price, place);

    const formdata = new FormData();

    formdata.append("productname", productname);
    formdata.append("category", category);
    formdata.append("price", price);
    formdata.append("place", place);
    formdata.append("image", image);
    formdata.append("date", currentdate);
    formdata.append("userId", userId);
    // console.log(form_data);

    console.log(image);

    //post request for submiting data to db
    // formsubmit(formdata);

    // const url = "http://localhost:5000/api/addproduct";
    // const value = "saghasg";
    // axios.post("http://localhost:5000/api/addproduct", value);
    // try {
    axios.post("http://localhost:5000/api/addproduct", formdata).then((res) => {
      console.log(res);
      history.push("/");
    });
    // } catch (error) {
    // console.log(error);
    // }
  };
  //main function return
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
            action="/"
            // method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <label htmlFor="fname">Product Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="productname"
              placeholder="Product name"
              value={productname}
              onChange={(e) => setProductName(e.target.value)}
            />

            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
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
              placeholder="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <br />

            <br />
            {filename.map((obj) => {
              // console.log(obj);
              return (
                <img
                  key={obj}
                  alt="Posts"
                  width="100px"
                  height="100px"
                  src={obj}
                ></img>
              );
            })}
            {/* <img
              // key={obj}
              alt="Posts"
              width="100px"
              height="100px"
              src={image ? URL.createObjectURL(image) : ""}
            ></img> */}

            <br />
            <input
              type="file"
              multiple
              name="image"
              onChange={imagehandleChange}
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
