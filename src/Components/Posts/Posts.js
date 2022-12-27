import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
import Grid from "@mui/material/Grid";
import Heart from "../../assets/Heart";
import "./Post.css";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { postDetailsContext } from "../../store/postContext";
import { useHistory } from "react-router-dom";
// import axios from "axios";

function Posts() {
  const history = useHistory();
  const [state, setState] = useState([]);
  // const [quickProducts, setquickProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalpages, settotalPages] = useState(0);
  const { setPost } = useContext(postDetailsContext);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  useEffect(() => {
    fetch(`http://localhost:5000/api/getproducts?page=${page}`)
      .then((response) => response.json())
      .then(({ products, totalPages }) => {
        console.log(products);
        settotalPages(totalPages);
        setState((prev) => [...prev, ...products]);
        console.log(totalpages);

        console.log(state);
      });
    // .then(() => {
    //   axios.get("http://localhost:5000/api/getquickproducts").then((res) => {
    //     setquickProducts(res.data);
    //   });
    // });
  }, [page]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/getquickproducts").then((res) => {
  //     setquickProducts(res.data);
  //   });
  // }, []);
  return (
    <Container>
      <Grid container>
        <div className="postParentDiv">
          <div className="moreView">
            <div className="heading">
              <span>Quick Menu</span>
              <span>View more</span>
            </div>
            <div className="cards" id="quickmenu_cards">
              {state.slice(0, 5).map((item, key) => {
                return (
                  <div
                    className="card"
                    value={key}
                    onClick={() => {
                      setPost(item);
                      localStorage.setItem("id", item._id);
                      history.push("/viewpost");
                    }}
                  >
                    <div className="favorite">
                      {/* <Heart></Heart> */}
                      <Checkbox
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                    </div>
                    <div className="image">
                      <img src={`../../../uploads/${item.image}`} alt="" />
                    </div>
                    <div className="content">
                      <p className="rate">&#x20B9;{item.price} </p>
                      <span className="kilometer">{item.category}</span>
                      <p className="name">{item.name}</p>
                    </div>
                    <div className="date">
                      <span>{item.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="recommendations">
            <div className="heading">
              <span>Fresh recommendations</span>
            </div>
            <div className="cards" id="itemcards">
              {state.map((obj, key) => {
                return (
                  <Paper
                    sx={{
                      margin: "10px",
                      textAlign: "start",
                      height: "min-content",
                    }}
                    className="card"
                    value={key}
                    // onClick={() => {
                    //   setPost(obj);
                    //   localStorage.setItem("id", obj._id);
                    //   history.push("/viewpost");
                    // }}
                  >
                    <div className="favorite">
                      {/* <Heart></Heart> */}
                      <Checkbox
                        {...label}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
                      />
                    </div>
                    <Box
                      className="image"
                      onClick={() => {
                        setPost(obj);
                        localStorage.setItem("id", obj._id);
                        history.push("/viewpost");
                      }}
                    >
                      <img src={`/uploads/${obj.image}`} alt={obj.image} />
                    </Box>
                    <div className="content">
                      <p className="rate">&#x20B9;{obj.price}</p>
                      <span className="kilometer">{obj.category}</span>
                      <p className="name" style={{ marginBottom: "0px" }}>
                        {obj.productname}
                      </p>
                    </div>
                    <div className="date">
                      <span>{obj.date}</span>
                    </div>
                  </Paper>
                );
              })}
            </div>
          </div>
        </div>
      </Grid>
      {page < totalpages && (
        <Grid>
          <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
            <Button
              onClick={() => setPage(page + 1)}
              variant="outlined"
              sx={{ color: "black", borderColor: "black" }}
            >
              Load more
            </Button>
          </Box>
        </Grid>
      )}
    </Container>
  );
}

export default Posts;
