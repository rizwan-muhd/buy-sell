import React, { useState, useEffect } from "react";
import axios from "axios";

//mui components importing
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SettingsSystemDaydreamRounded } from "@mui/icons-material";

const theme = createTheme();

//main function
export default function Profile() {
  //user id getting
  const userId = localStorage.getItem("userId");

  const [existingUser, setexistingUser] = useState([]);
  const [name, setName] = useState("");

  //get user datas
  useEffect(() => {
    axios.get(`http://localhost:5000/api/getuser?id=${userId}`).then((res) => {
      console.log(res.data.user);
      setexistingUser(res.data.user);
    });
  }, []);

  //form submit function
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitting");
    console.log(existingUser.name);
    console.log(existingUser.email);
    console.log(existingUser.phone);
    // console.log(existingUser.name);
  };

  console.log(name);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 12,
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  // value={name}
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Email"
                  name="email"
                  autoComplete="family-name"
                  defaultValue={existingUser.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Mobile Number"
                  name="phone"
                  autoComplete="email"
                  // defaultValue={existingUser.phone}
                  defaultValue={existingUser.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 2 }}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 2 }}
                >
                  Delete Account
                </Button>
              </Grid>
            </Grid>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
