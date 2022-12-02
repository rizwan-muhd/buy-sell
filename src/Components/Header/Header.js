import React from "react";
import Grid from "@mui/system/Unstable_Grid";
import Container from "@mui/material/Container";

import "./Header.css";
// import Login from "../../Pages/Login";
// import Create from "../../Pages/Create";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
function Header() {
  const user = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    // window.location.reload();
    window.location = "/login";
  };
  const handleCreate = (user) => {
    // alert("clicked");
    user ? (window.location = "/create") : (window.location = "/login");
  };

  return (
    <Container>
      <Grid container spacing={1}>
        {/* <Grid md={12}> */}
        {/* <div className="headerParentDiv"> */}
        {/* <div className="headerChildDiv"> */}
        <Grid lg={1} sx={{ color: "red" }}>
          <div className="brandName">
            <OlxLogo></OlxLogo>
          </div>
        </Grid>
        <Grid lg={3}>
          <div className="placeSearch">
            <Search></Search>
            <input type="text" />
            <Arrow></Arrow>
          </div>
        </Grid>
        <Grid lg={4}>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                placeholder="Find car,mobile phone and more..."
              />
            </div>
            <div className="searchAction">
              <Search color="#ffffff"></Search>
            </div>
          </div>
        </Grid>
        <Grid lg={1}>
          <div className="language">
            <span> ENGLISH </span>
            <Arrow></Arrow>
          </div>
        </Grid>
        <Grid lg={1}>
          <div className="loginPage">
            <button onClick={handleLogout}>{user ? "Logout" : "Login"}</button>
            <hr />
          </div>
        </Grid>

        <Grid lg={2}>
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
    </Container>
  );
}

export default Header;
