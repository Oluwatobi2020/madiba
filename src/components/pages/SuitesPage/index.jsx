import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import CircledLogo from "../../../assets/logo-2.png";
import SpaPicture from "../../../assets/pics9.jpg";
import { FaPhone } from "react-icons/fa";
import HeaderSection from "../HeaderSection";
import FooterSection from "../FooterSection";

const SuitesPage = () => {
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
                  textAlign: "center",
                  fontSize: { lg: "4em", md: "3em", sm: "2em", xs: "2em" },
                }}
              >
                Magnificient Suites
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
                Experience the epitome of luxury and comfort in our magnificent
                hotel suites. Our meticulously designed suites are a harmonious
                blend of opulence and practicality, offering you a lavish
                retreat like no other. With sweeping views of the city skyline
                or serene landscapes, each suite is a private haven designed for
                relaxation and rejuvenation. Step into your spacious sanctuary,
                adorned with plush furnishings, rich fabrics, and modern
                amenities. The elegantly appointed bedroom beckons you to sink
                into a cloud-like bed, ensuring a restful night's sleep. The
                separate living area is a splendid space for unwinding, and the
                private balcony is a tranquil escape for taking in the
                breathtaking vistas. Indulge in the convenience of a
                well-equipped kitchenette and a lavish bathroom with premium
                toiletries...
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <FooterSection />
    </Box>
  );
};

export default SuitesPage;
