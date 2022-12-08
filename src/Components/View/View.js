import React, { useContext, useEffect, useState } from "react";
import { postDetailsContext } from "../../store/postContext";
import Box from "@mui/material/Box";
import axios from "axios";

import "./View.css";
function View() {
  const { post } = useContext(postDetailsContext);
  const userData = localStorage.getItem("userdata");
  const [product, setProduct] = useState([]);

  // const id = post._id;
  // console.log(id);

  const id = localStorage.getItem("id");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/getproduct?id=${id}`).then((res) => {
      console.log(res.data);

      setProduct(res.data);
    });
  }, []);

  return (
    <Box className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={`../../../uploads/${product.image}`} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product.price} </p>
          <span>{product.name}</span>
          <p>{product.category}</p>
          <span>{product.date}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userData.name}</p>
          <p>60000</p>
        </div>
      </div>
    </Box>
  );
}
export default View;
