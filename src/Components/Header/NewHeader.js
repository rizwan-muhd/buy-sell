import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import { styled, alpha } from "@mui/material/styles";

import Logo from "../../olx-logo.png";
import OlxLogo from "../../assets/OlxLogo";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Login"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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

function ResponsiveAppBar() {
  const user = localStorage.getItem("token");
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = (val) => {
    setOpen(true);
    localStorage.removeItem("token");
  };

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

  const handleCreate = (user) => {
    user ? (window.location = "/create") : (window.location = "/login");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              //   letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Buy & Sell
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box>
            {user && (
              <Button
                variant="contained"
                onClick={handleLogin}
                sx={{ mx: "4px" }}
              >
                Logout
              </Button>
            )}
            {user && (
              <Button
                variant="contained"
                onClick={handleCreate}
                sx={{ mx: "4px" }}
              >
                Sell
              </Button>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      if (setting === "Login") {
                        alert("login page");
                        handleLogin();

                        // history.push("/signup");
                      }
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
