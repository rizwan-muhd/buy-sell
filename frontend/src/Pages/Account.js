import React from "react";
import Account from "../Components/Account/Account";
import NewFooter from "../Components/Footer/NewFooter";
import ResponsiveAppBar from "../Components/Header/NewHeader";

function AccountPage() {
  return (
    <div>
      <ResponsiveAppBar />
      <Account />
      <NewFooter />
    </div>
  );
}

export default AccountPage;
