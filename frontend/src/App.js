import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ViewPost from "./Pages/ViewPost";
import Signup from "./Pages/Signup";
import CreatePage from "./Pages/Create";
import PostDetails from "./store/postContext";
import Profile from "./Components/Signup/Profile";
import AccountPage from "./Pages/Account";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import FavouritesPage from "./Pages/Favourites";
import PasswordReset from "./Components/passwordReset/PasswordReset";
import ConfirmPassword from "./Components/passwordReset/ConfirmPassword";
import axios from "axios";

function App() {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getUser();
  }, []);
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState(null);
  const user = localStorage.getItem("token");

  const getUser = async () => {
    try {
      const url = "http://localhost:5000/api/Googlelogin/success";
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <PostDetails>
        <Router>
          <Route path="/" exact>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "25%",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Home />
            )}
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/passwordreset">
            <PasswordReset />
          </Route>
          <Route path="/confirmpassword">
            <ConfirmPassword />
          </Route>
          <Route path="/viewpost">
            <ViewPost />
          </Route>
          {user && (
            <Route path="/account">
              <AccountPage />
            </Route>
          )}
          <Route path="/create" exact>
            {user ? <CreatePage /> : <Signup />}
          </Route>
          <Route path="/favourites">
            <FavouritesPage />
          </Route>
        </Router>
      </PostDetails>
    </div>
  );
}

export default App;
