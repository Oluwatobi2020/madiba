import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import CircledLogo from "../../../assets/logo-2.png";
import SpaPicture from "../../../assets/gym-pics.jpg";
import { FaPhone } from "react-icons/fa";
import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection";

const FitFabPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        backgroundPosition: "fixed",
        width: "100%",
        height: "100vh",
      }}
    >
      <HeaderSection/>
      <Box
        sx={{
          width: "100%",
          height: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${SpaPicture.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: { lg: "0", md: "0", sm: "0", xs: "0" },
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "#0000008c",
          }}
        >
          <Grid
            container
            sx={{ width: { lg: "50%", md: "70%", sm: "80%", xs: "70%" } }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: { xs: "1rem" },
              }}
            >
              <Typography
                sx={{
                  color: "olive.main",
                  fontSize: { lg: "4em", md: "3em", sm: "2em", xs: "2em" },
                }}
              >
                Fit & Fab
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#fafafa87",
                padding: { lg: "2rem", md: "2em", sm: "1.5em", xs: "1em" },
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  color: "#0B0B0A",
                  fontSize: {
                    lg: "0.8em",
                    md: "0.8em",
                    sm: "0.7em",
                    xs: "0.65em",
                  },
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "600",
                }}
              >
                Elevate your wellness journey at our hotel's state-of-the-art
                fitness center. Unwind and recharge in a cutting-edge facility
                that caters to all your health and fitness needs. Our spacious,
                well-equipped gym offers a comprehensive range of modern
                exercise equipment, perfect for guests of all fitness levels.
                Stay motivated with our experienced personal trainers, who can
                guide you on your path to health and vitality. Enjoy panoramic
                views and invigorating music as you work up a sweat. After your
                workout, refresh in our pristine locker rooms and indulge in a
                post-exercise relaxation session in our spa facilities. Whether
                you're a fitness enthusiast or looking to kickstart a healthier
                lifestyle, our fitness center is here to help you achieve your
                goals. Make your stay not only about comfort but also about
                revitalizing your body and mind. Join us in embracing a fitter,
                healthier you at our hotel's fitness center. Your wellness
                journey starts here.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <FooterSection/>
    </Box>
  );
};

export default FitFabPage;
