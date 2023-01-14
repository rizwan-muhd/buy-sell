import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../olx-logo.png";
import "./Signup.css";

//mui components importing
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Signup() {
  const history = useHistory();

  const [error, setError] = useState("");
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  // console.log("signup page");

  // console.log("name" + userDetails.name);

  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.value);

    const { name, value } = e.target;

    // console.log(name, value);

    setuserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:5000/api/signup";
      const { data: res } = await axios.post(url, userDetails);
      history.push("/");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img
          width="100%"
          height="200px"
          src="https://thumbs.dreamstime.com/b/buy-sell-speech-bubble-showing-commerce-concept-49769909.jpg"
          alt=""
        ></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            placeholder="username"
            required
            // {...register("username", { required: true })}
            name="name"
            value={userDetails.name}
            onChange={handleChange}
          />
          <br />
          {/* {errors.username ? <p>Please check the Username</p> : null} */}
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            placeholder="email"
            required
            // {...register("email", {
            // required: true,
            // pattern:
            // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            // })}
            name="email"
            value={userDetails.email}
            onChange={handleChange}
          />
          <br />
          {/* {errors.email && <p>Please check the Email</p>} */}
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            placeholder="mobileno"
            required
            // {...register("mobileno")}
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
          />
          <br />
          {/* {errors.mobileno ? <p>Please check the Mobile no</p> : null} */}
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            required
            placeholder="password"
            // {...register("password", {
            //   required: true,
            //   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            // })}
            name="password"
            value={userDetails.password}
            onChange={handleChange}
          />
          <Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ textAlign: "center", my: 2 }}
            >
              Or Signup With
            </Typography>
            <Paper sx={{ textAlign: "center", my: 1, p: 1 }}>
              <GoogleIcon sx={{ mr: 1 }} />

              <AppleIcon />
            </Paper>
          </Box>
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <br />
          <button type="submit">Signup</button>
        </form>
        <a href="/">Login</a>
      </div>
    </div>
  );
}

// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox value="allowExtraEmails" color="primary" />
//                   }
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
