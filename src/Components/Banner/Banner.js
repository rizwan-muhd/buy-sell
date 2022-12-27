import React, { useState } from "react";
import MuiImageSlider from "mui-image-slider";
import Paper from "@mui/material/Paper";

import "./Banner.css";
// import Arrow from "../../assets/Arrow";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import bannerImg from "../../../uploads/Images/CoverBanner.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

//main function begins
function Banner() {
  //images array
  const images = [
    {
      url: "https://mindstacktechnologies.com/blog/wp-content/uploads/2018/01/ecommerce-banner.jpg",
    },
    {
      url: "https://static.vecteezy.com/system/resources/previews/002/294/859/original/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg",
    },
    {
      url: "https://i.pinimg.com/736x/c4/fa/7b/c4fa7b04c2626d974569386190633ed2--commerce-poster-design.jpg",
    },

    {
      url: "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg",
    },
    { url: "https://static1.bigstockphoto.com/3/9/3/large2/393287000.jpg" },
  ];
  // console.log(images);

  // const [age, setAge] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  // const handleDropdown = () => {};

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
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
              <Typography sx={{ pt: 1, mx: 2 }}>Laptops</Typography>
              <Typography sx={{ pt: 1, mx: 2 }} onClick={() => alert("mobile")}>
                Food items
              </Typography>
              <Typography sx={{ pt: 1, mx: 2 }}>Apartments</Typography>
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
          <Box sx={{ flexGrow: 1 }}>
            {/* <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper> */}
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.url}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 255,
                        display: "block",
                        // maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.url}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{ justifyContent: "center" }}
              // nextButton={
              //   <Button
              //     size="small"
              //     onClick={handleNext}
              //     disabled={activeStep === maxSteps - 1}
              //   >
              //     Next
              //     {theme.direction === "rtl" ? (
              //       <KeyboardArrowLeft />
              //     ) : (
              //       <KeyboardArrowRight />
              //     )}
              //   </Button>
              // }
              // backButton={
              //   <Button
              //     size="small"
              //     onClick={handleBack}
              //     disabled={activeStep === 0}
              //   >
              //     {theme.direction === "rtl" ? (
              //       <KeyboardArrowRight />
              //     ) : (
              //       <KeyboardArrowLeft />
              //     )}
              //     Back
              //   </Button>
              // }
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Banner;
