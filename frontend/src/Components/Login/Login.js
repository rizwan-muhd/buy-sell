import axios from "axios";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import "./Login.css";

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

function Login() {
  // const History = useHistory();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    window.location = "/";
    setOpen(false);
  };

  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // const email = e.target.value;
    // const password = e.target.value;
    const { name, value } = e.target;
    // console.log(email);
    // console.log(password);

    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:5000/api/login";
      const { data: res } = await axios.post(url, loginData);
      localStorage.setItem("token", res.data);
      console.log(res.data);

      window.location = "/";
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

  return (
    // <div>
    //   <div className="loginParentDiv">
    //     <img width="200px" height="200px" src={Logo} alt=""></img>
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="fname">Email</label>
    //       <br />
    //       <input
    //         className="input"
    //         type="email"
    //         id="fname"
    //         name="email"
    //         defaultValue="John"
    //         onChange={handleChange}
    //       />
    //       <br />
    //       <label htmlFor="lname">Password</label>
    //       <br />
    //       <input
    //         className="input"
    //         type="password"
    //         id="lname"
    //         name="password"
    //         defaultValue="Doe"
    //         onChange={handleChange}
    //       />
    //       <br />
    //       <Box>
    //         <Typography
    //           variant="subtitle1"
    //           gutterBottom
    //           sx={{ textAlign: "center", my: 2 }}
    //         >
    //           Or Login With
    //         </Typography>
    //         <Paper sx={{ textAlign: "center", my: 1, p: 1 }}>
    //           <GoogleIcon sx={{ mr: 1 }} />

    //           <AppleIcon />
    //         </Paper>
    //       </Box>
    //       {error && <p>{error}</p>}
    //       <br />
    //       <button>Login</button>
    //     </form>
    //     <a href="/signup">Signup</a>
    //   </div>
    // </div>
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <div className="loginParentDiv"> */}
          <img
            width="100%"
            height="200px"
            src="https://thumbs.dreamstime.com/b/buy-sell-speech-bubble-showing-commerce-concept-49769909.jpg"
            alt=""
          ></img>
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

              {/* <AppleIcon /> */}
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
  );
}

export default Login;
