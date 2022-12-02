import React, { Fragment } from "react";
import "./Create.css";
import Grid from "@mui/material/Grid";
// import Header from "../Header/Header";

const Create = () => {
  return (
    // <Fragment>
    // {/* <Header /> */}
    // <card>
    <Grid container>
      <div className="centerDiv">
        <form>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            // defaultValue=""
            placeholder="full name"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" id="fname" name="Price" />
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
          />
          <br />
        </form>
        <br />
        <img alt="Posts" width="200px" height="200px" src=""></img>
        <form>
          <br />
          <input type="file" />
          <br />
          <button className="uploadBtn">upload and Submit</button>
        </form>
      </div>
    </Grid>
    // {/* </card> */}
    // </Fragment>
  );
};

export default Create;
