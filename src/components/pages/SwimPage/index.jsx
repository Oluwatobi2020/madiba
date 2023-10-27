import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import CircledLogo from "../../../assets/logo-2.png";
import SpaPicture from "../../../assets/swimming-pics.jpg";
import { FaPhone } from "react-icons/fa";
import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection";

const SwimPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        backgroundPosition: "fixed",
        width: "100%",
        height: "100vh",
      }}
    >
      <HeaderSection />
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
                Swim & Chill
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
                Dive into pure relaxation and fun at our hotel's exquisite
                swimming pool center. Nestled in a tranquil oasis, our pool area
                offers a refreshing escape from the everyday hustle and bustle.
                Immerse yourself in the crystal-clear waters and soak up the sun
                on our comfortable lounge chairs, surrounded by lush greenery
                and serene views. Our poolside bar and restaurant ensure you're
                well-refreshed with your favorite beverages and delectable
                snacks. Whether you're looking for a family-friendly splash, a
                romantic retreat, or a place to unwind, our pool is a haven for
                guests of all ages. With a dedicated lifeguard and attentive
                staff, safety and comfort are our top priorities. Make a splash
                and create unforgettable memories at our hotel's swimming pool
                center. Your aquatic adventure awaits here.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <FooterSection />
    </Box>
  );
};

export default SwimPage;
