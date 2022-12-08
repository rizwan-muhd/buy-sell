import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ViewPost from "./Pages/ViewPost";
import Signup from "./Pages/Signup";
// import Login from "./Pages/Login";
// import Create from "./Pages/Create";
import CreatePage from "./Pages/Create";
import PostDetails from "./store/postContext";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div>
      <PostDetails>
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          {/* <Route path="/">
          <Login />
        </Route> */}
          <Route path="/viewpost">
            <ViewPost />
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
