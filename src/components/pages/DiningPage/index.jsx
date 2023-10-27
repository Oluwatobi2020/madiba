import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import CircledLogo from "../../../assets/logo-2.png";
import SpaPicture from "../../../assets/dining-pics.jpg";
import { FaPhone } from "react-icons/fa";
import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection";

const DiningPage = () => {
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
                Fine Dining
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
                Elevate your dining experience to new heights at our hotel's
                exquisite restaurant. Nestled in the heart of luxury, our dining
                establishment promises a feast for the senses. With a menu
                curated by world-class chefs, savor an array of delectable
                dishes, artfully prepared using the finest locally-sourced
                ingredients. Immerse yourself in a chic, yet inviting ambiance
                that's perfect for intimate dinners or celebratory gatherings.
                Our attentive staff is dedicated to providing top-notch service,
                ensuring your every need is met. Whether you're a connoisseur
                seeking culinary delights or simply looking for an unforgettable
                dining experience, our restaurant invites you to savor every
                moment and relish in the joy of exceptional cuisine. Join us and
                let your taste buds embark on a journey of culinary excellence.
                Your table is set, and an extraordinary dining adventure awaits.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <FooterSection />
    </Box>
  );
};

export default DiningPage;
