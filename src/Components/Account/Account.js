import React, { useState, useEffect } from "react";
import "../Posts/Post.css";
import axios from "axios";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Heart from "../../assets/Heart";
import Snackbar from "@mui/material/Snackbar";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
// import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Container } from "@mui/material";
import { Flag } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Account() {
  // const flag = false;

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;

  const SnackhandleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const SnackhandleClose = () => {
    setState({ ...state, open: false });
  };
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
  const [items, setItems] = useState([]);

  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/ownproducts?id=${userId}`)
      .then((res) => {
        // console.log(res.data.products);
        setItems(res.data.products);
        // console.log(items);
      });
  }, [userId]);

  const handleEdit = () => {
    setOpen(true);
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/deleteproduct?id=${id}`);
    console.log(id);
    axios
      .get(`http://localhost:5000/api/ownproducts?id=${userId}`)
      .then((res) => {
        // console.log(res.data.products);
        setItems(res.data.products);
        // console.log(items);
      });

    SnackhandleClick({
      vertical: "top",
      horizontal: "right",
    });
  };
  // <Stack sx={{ width: "100%" }} spacing={2}>
  //   <Alert severity="success">Deleted succesfully!</Alert>;
  // </Stack>;

  return (
    <Box sx={{ marginTop: "3rem", alignItems: "center", minHeight: "25rem" }}>
      <Container>
        {/* {flag && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="success">Deleted succesfully!</Alert>;
          </Stack>
        )} */}

        {userId && (
          <Grid container spacing={2}>
            {userName && (
              <Grid item md={12} sx={{ textAlign: "end" }}>
                <Link to="/create">
                  <Button variant="contained">+Add Product</Button>
                </Link>
              </Grid>
            )}
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={SnackhandleClose}
              message="I love snacks"
              key={vertical + horizontal}
            />
            {items.map((obj) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <Paper
                    sx={{
                      // margin: "10px",
                      height: " max-content",
                    }}
                    className="card"
                    // value={key}
                    onClick={() => {
                      // setPost(obj);
                      // localStorage.setItem("id", obj._id);
                      // history.push("/viewpost");
                    }}
                  >
                    <div className="favorite">
                      <Typography variant="subtitle1">
                        20
                        <VisibilityIcon fontSize="3" />
                      </Typography>
                    </div>
                    <div className="image">
                      <img src={`../../../uploads/${obj.image}`} alt="" />
                    </div>
                    <div className="content">
                      <p className="rate">&#x20B9;{obj.price}</p>
                      <span className="kilometer">{obj.productname}</span>
                      <p className="name" style={{ marginBottom: "0px" }}>
                        {obj.category}
                      </p>
                    </div>
                    <Grid container>
                      <Grid item md={6}>
                        {/* <div className="date"> */}
                        <EditIcon color="primary" onClick={handleEdit} />
                        <DeleteIcon
                          color="error"
                          onClick={() => handleDelete(obj._id)}
                        />
                      </Grid>
                      <Grid item md={6} sx={{ fontSize: 12, textAlign: "end" }}>
                        <span>{obj.date}</span>
                        {/* </div> */}
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        )}
        <div>
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                textAlign="center"
              >
                Edit Product
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Enter new Product Details
              </Typography>
              <TextField
                margin="dense"
                id="outlined-basic"
                label="Product name"
                variant="outlined"
                fullWidth
              />
              <TextField
                margin="dense"
                id="outlined-basic"
                label="Price"
                variant="outlined"
                fullWidth
              />
              <InputLabel id="demo-select-small">category</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value="asdhjga"
                label="category"
                fullWidth
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Cars</MenuItem>
                <MenuItem value={20}>Scooter</MenuItem>
                <MenuItem value={30}>Electronics</MenuItem>
                <MenuItem value={30}>Apartments</MenuItem>
                <MenuItem value={30}>Sports</MenuItem>
                <MenuItem value={30}>Mobiles</MenuItem>
                <MenuItem value={30}>Laptops</MenuItem>
              </Select>
              <TextField
                margin="dense"
                id="outlined-basic"
                label="Place"
                variant="outlined"
                fullWidth
              />
              <Paper sx={{ padding: 2 }}>
                <Typography>Upload Image</Typography>
                <CloudUploadIcon />
              </Paper>
              <Button variant="contained" sx={{ marginTop: 2, marginRight: 2 }}>
                Upload
              </Button>
              <Button
                variant="outlined"
                sx={{ marginTop: 2 }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </Modal>
        </div>
      </Container>
    </Box>
  );
}
export default Account;
