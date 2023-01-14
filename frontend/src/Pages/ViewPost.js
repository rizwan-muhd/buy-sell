import React from "react";
import NewFooter from "../Components/Footer/NewFooter";
// import Footer from "../Components/Footer/Footer";

// import Header from "../Components/Header/Header";
import ResponsiveAppBar from "../Components/Header/NewHeader";
import View from "../Components/View/View";

function ViewPost(props) {
  return (
    <div>
      {/* <Header /> */}
      <ResponsiveAppBar />
      <View />
      {/* <Footer /> */}
      <NewFooter />
    </div>
  );
}

export default ViewPost;
