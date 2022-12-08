import React from "react";
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
    </div>
  );
}

export default ViewPost;
