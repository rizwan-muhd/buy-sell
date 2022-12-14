//import react components
import React, { useEffect, useState } from "react";
// import { postDetailsContext } from "../../store/postContext";
import axios from "axios";

//mui components importing
import Box from "@mui/material/Box";
import ChatIcon from "@mui/icons-material/Chat";
import Grid from "@mui/material/Grid";

//importing css
import "./View.css";

//main function begins
function View() {
  // const { post } = useContext(postDetailsContext);
  // const userData = localStorage.getItem("userdata");
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);

  // const id = post._id;
  // console.log(id);

  const id = localStorage.getItem("id");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/getproduct?id=${id}`).then((res) => {
      console.log(res.data);

      setProduct(res.data.product);
      setUser(res.data.user);
    });
  }, []);

  return (
    <Box className="viewParentDiv">
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <div className="imageShowDiv">
            <img src={`../../../uploads/${product.image}`} alt="" />
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div className="rightSection">
            <div className="productDetails">
              <p>&#x20B9; {product.price} </p>
              <span>{product.name}</span>
              <p>{product.category}</p>
              <span>{product.date}</span>
            </div>
            <div className="contactDetails">
              <p>Seller details</p>
              <p>Name:{user.name}</p>
              <p>Mob:{user.phone}</p>
            </div>
            <Box className="contactDetails">
              <p>Chat with Seller</p>
              <p>Name:{user.name}</p>
              <ChatIcon />
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
export default View;
