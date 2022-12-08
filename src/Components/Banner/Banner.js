import React, { useState } from "react";

import "./Banner.css";
import Arrow from "../../assets/Arrow";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// import bannerImg from "../../../uploads/Images/CoverBanner.jpg";
function Banner() {
  // const [age, setAge] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  // const handleDropdown = () => {};

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    // alert("pop over");
    setAnchorEl(event.currentTarget);
    // setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // setAnchorEl(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          {/* <Box
          //   sx={{ cursor: "pointer" }}
          //   className="categoryMenu"
          //   aria-describedby={id}
          //   onclick={handleClick}
          >
          //   <span>ALL CATEGORIES</span>
          //   <Arrow></Arrow>
          </Box> */}
          <Box>
            <Typography
              // aria-describedby={id}
              variant="subtitle1"
              // onClick={handleClick}
            >
              ALL CATEGORIES
              <ArrowDropDownIcon aria-describedby={id} onClick={handleClick} />
            </Typography>
          </Box>
          <div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ pt: 1, mx: 2 }}>Cars</Typography>
              <Typography sx={{ pt: 1, mx: 2 }}>Motorcycle</Typography>
              <Typography sx={{ pt: 1, mx: 2 }}>Mobile Phones</Typography>
              <Typography sx={{ pt: 1, mx: 2 }}>Mobile Phones</Typography>
              <Typography sx={{ pt: 1, mx: 2 }} onClick={() => alert("mobile")}>
                Mobile Phones
              </Typography>
            </Popover>
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycle</span>
            <span>Mobile Phones</span>
            <span>For Sale:Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: House & Apartments</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/CoverBanner.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
