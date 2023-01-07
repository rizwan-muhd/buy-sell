import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ViewPost from "./Pages/ViewPost";
import Signup from "./Pages/Signup";
// import Login from "./Pages/Login";
// import Create from "./Pages/Create";
import CreatePage from "./Pages/Create";
import PostDetails from "./store/postContext";
import Profile from "./Components/Signup/Profile";
import AccountPage from "./Pages/Account";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem("token");
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
          {/* <Route path="/">
          <Login />
        </Route> */}
          <Route path="/viewpost">
            <ViewPost />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/create" exact>
            {user ? <CreatePage /> : <Signup />}
          </Route>
        </Router>
      </PostDetails>
    </div>
  );
}

export default App;
