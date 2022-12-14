// react main components importing
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

//material ui components importing
import Grid from "@mui/system/Unstable_Grid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

//css files importing
import "./Header.css";
import "../Login/Login.css";

//main logo importing
import Logo from "../../olx-logo.png";
import OlxLogo from "../../assets/OlxLogo";

// import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";

const filter = createFilterOptions();

//modal styling
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backdropFilter: "blur(10px)",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

function Header() {
  const history = useHistory();

  const user = localStorage.getItem("token");

  //modal states importing
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  //user logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    handleOpen();
    // window.location.reload();
    // window.location = "/login";
  };

  const handleCreate = (user) => {
    user ? (window.location = "/create") : (window.location = "/login");
  };

  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //user values geting
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //user data submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:5000/api/login";
      await axios.post(url, loginData).then((res) => {
        localStorage.setItem("token", res.data.data);
        localStorage.setItem("userId", res.data.user._id);
        console.log(res.data);
        console.log(res.data.message);
        console.log(res.data.user);
        // setUserDetails(res.data.user);

        setOpen(false);
        // history.push("/");  const { data: res } =
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    // console.log(loginData);
    // axios
    //   .post("", loginData)
    //   .then(() => {
    //     History.push("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  //dummy dropdown menu for loacations
  const top100Films = [
    { title: "Kerala" },
    { title: "Karnataka" },
    { title: "Mumbai" },
    { title: "Delhi" },
    { title: "Goa" },
    { title: "Hyderabad" },
    { title: "chennai" },
  ];
  return (
    <Box className="headerParentDiv">
      <Container>
        <Grid container spacing={1}>
          {/* <Grid md={12}> */}
          {/* <div className="headerParentDiv"> */}
          {/* <div className="headerChildDiv"> */}
          <Grid md={1} lg={1} sx={{ color: "red" }}>
            <div className="brandName">
              <OlxLogo></OlxLogo>
            </div>
          </Grid>
          <Grid md={2} lg={3}>
            {/* <div className="placeSearch">
              <Search></Search>
              <input type="text" />
              <Arrow></Arrow>
            </div> */}
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  setValue({
                    title: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  // Create a new value from the user input
                  setValue({
                    title: newValue.inputValue,
                  });
                } else {
                  setValue(newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some(
                  (option) => inputValue === option.title
                );
                if (inputValue !== "" && !isExisting) {
                  filtered.push({
                    inputValue,
                    title: `Add "${inputValue}"`,
                  });
                }

                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={top100Films}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                  return option.inputValue;
                }
                // Regular option
                return option.title;
              }}
              renderOption={(props, option) => (
                <li {...props}>{option.title}</li>
              )}
              sx={{ width: "100% " }}
              freeSolo
              renderInput={(params) => (
                <TextField {...params} label="Select major cities" />
              )}
            />
          </Grid>
          <Grid md={3} lg={4}>
            {/* <div className="productSearch">
              <div className="input">
                <input
                  type="text"
                  placeholder="Find car,mobile phone and more..."
                />
              </div>
              <div className="searchAction">
                <Search color="#ffffff"></Search>
              </div>
            </div> */}
            {/* <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              sx={{ width: "100%" }}
            ></TextField> */}
            {/* <Search color="#ffffff"></Search> */}
            {/* <Paper */}
            <Box
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "60%",
                border: "1px solid",
                borderRadius: "5px",
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Laptops,mobiles,Cars"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>

              {/* <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <DirectionsIcon />
              </IconButton> */}
            </Box>
            {/* </Paper> */}
          </Grid>
          <Grid md={1} lg={1}>
            <div className="language">
              <span> ENGLISH </span>
              <Arrow></Arrow>
            </div>
          </Grid>
          <Grid md={1} lg={1} padding={2}>
            <div className="loginPage">
              <button onClick={handleLogout}>
                {user ? "Logout" : "Login"}
              </button>

              {/* <hr /> */}
            </div>

            {user && <Avatar>U</Avatar>}
          </Grid>

          <Grid md={1} lg={2}>
            <div className="sellMenu" onClick={handleCreate}>
              <SellButton></SellButton>
              <div className="sellMenuContent">
                <SellButtonPlus></SellButtonPlus>
                <span>SELL</span>
              </div>
            </div>
          </Grid>

          {/* </div> */}
          {/* </div> */}
          {/* </Grid> */}
        </Grid>

        <div>
          {/* <Button onClick={handleOpen}>Login</Button> */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* <div className="loginParentDiv"> */}
              <img width="100%" height="200px" src={Logo} alt=""></img>
              {/* <form onSubmit={handleSubmit}> */}
              <label htmlFor="fname">Email</label>
              <br />
              <input
                className="input"
                type="email"
                id="fname"
                name="email"
                defaultValue="John"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="lname">Password</label>
              <br />
              <input
                className="input"
                type="password"
                id="lname"
                name="password"
                defaultValue="Doe"
                onChange={handleChange}
              />
              <br />
              {error && <p>{error}</p>}
              <Box>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ textAlign: "center", my: 2 }}
                >
                  Or Login With
                </Typography>
                <Paper sx={{ textAlign: "center", my: 1, p: 1 }}>
                  <GoogleIcon sx={{ mr: 1 }} />

                  <AppleIcon />
                </Paper>
              </Box>

              <br />
              <Box sx={{ textAlign: "center" }}>
                <Paper onClick={handleSubmit}>Login</Paper>
              </Box>
              {/* </form> */}
              <Box sx={{ textAlign: "center", my: 1 }}>
                <Paper>
                  <a href="/signup">Signup</a>
                </Paper>
              </Box>

              {/* </div> */}
            </Box>
          </Modal>
        </div>
      </Container>
    </Box>
  );
}

export default Header;
