// import React, { Fragment } from "react";
// import Header from "../Components/Header/Header";
import Create from "../Components/Create/Create";
import NewFooter from "../Components/Footer/NewFooter";
// import Footer from "../Components/Footer/Footer";
import ResponsiveAppBar from "../Components/Header/NewHeader";

function CreatePage() {
  return (
    <div>
      {/* <Header /> */}
      <ResponsiveAppBar />
      <Create />

      {/* <Footer /> */}
      <NewFooter />
    </div>
  );
}

export default CreatePage;
