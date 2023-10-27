import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import CircledLogo from "../../../assets/logo-2.png";
import SpaPicture from "../../../assets/events-pics.jpg";
import { FaPhone } from "react-icons/fa";
import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection";

const EventSpacesPage = () => {
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
                Event Space
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
                Discover the perfect venue for your next unforgettable event at
                our premier event center. Nestled in a prime location, our
                versatile facility is designed to bring your vision to life, no
                matter the occasion. From elegant weddings and grand corporate
                gatherings to intimate celebrations, we offer a versatile canvas
                to transform your dreams into reality. Our state-of-the-art
                event spaces are both spacious and adaptable, accommodating a
                wide range of guest counts and themes. Immerse yourself in an
                ambiance of sophistication and modern design, with stunning
                lighting and audio-visual capabilities to enhance your event.
                Our professional event planning team is dedicated to curating
                every detail to perfection, ensuring that your event is executed
                flawlessly...
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <FooterSection/>
    </Box>
  );
};

export default EventSpacesPage;
