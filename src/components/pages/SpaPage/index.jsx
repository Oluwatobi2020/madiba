import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import CircledLogo from "../../../assets/logo-2.png";
import SpaPicture from "../../../assets/spa-pics.jpg";
import { FaPhone } from "react-icons/fa";
import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection";

const SpaPage = () => {
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
              sx={{ display: "flex", justifyContent: "center", paddingBottom:{xs:"1rem"} }}
            >
              <Typography
                sx={{
                  color: "olive.main",
                  fontSize: { lg: "4em", md: "3em", sm: "2em", xs: "2em" },
                }}
              >
                Spa Haven
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
                Indulge in pure relaxation and rejuvenation at our exquisite spa
                oasis. Nestled in a serene sanctuary, our spa offers a haven of
                tranquility where you can escape the hustle and bustle of daily
                life. Immerse yourself in a world of bliss as our expert
                therapists pamper you with luxurious treatments, from soothing
                massages to invigorating facials. Our elegant, calming ambiance,
                fragrant aromatherapy, and serene music create the perfect
                atmosphere for your escape. Let us melt away your stress and
                tensions, leaving you refreshed, revitalized, and ready to
                embrace the world anew. Discover the art of self-care and
                experience the epitome of wellness at our spa. Your journey to
                relaxation begins here.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <FooterSection/>
    </Box>
  );
};

export default SpaPage;
