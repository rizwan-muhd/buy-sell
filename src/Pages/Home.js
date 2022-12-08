import React from "react";

// import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";

import Posts from "../Components/Posts/Posts";
import Footer from "../Components/Footer/Footer";
import ResponsiveAppBar from "../Components/Header/NewHeader";

function Home(props) {
  return (
    <div className="homeParentDiv">
      <ResponsiveAppBar />
      {/* <Header /> */}
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
