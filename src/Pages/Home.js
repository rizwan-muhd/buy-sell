import React, { useState } from "react";

// import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";

import Posts from "../Components/Posts/Posts";
// import Footer from "../Components/Footer/Footer";
import ResponsiveAppBar from "../Components/Header/NewHeader";
import NewFooter from "../Components/Footer/NewFooter";

// import FooterOne from "../Components/Footer/NewFooter";

function Home(props) {
  return (
    <>
      <div className="homeParentDiv">
        <ResponsiveAppBar />
        {/* <Header /> */}
        <Banner />
        <Posts />
        {/* <Footer /> */}
        <NewFooter />
      </div>
    </>
  );
}

export default Home;
