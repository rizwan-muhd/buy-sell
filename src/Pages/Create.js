// import React, { Fragment } from "react";
// import Header from "../Components/Header/Header";
import Create from "../Components/Create/Create";
import Footer from "../Components/Footer/Footer";
import ResponsiveAppBar from "../Components/Header/NewHeader";

function CreatePage() {
  return (
    <div>
      {/* <Header /> */}
      <ResponsiveAppBar />
      <Create />

      <Footer />
    </div>
  );
}

export default CreatePage;
