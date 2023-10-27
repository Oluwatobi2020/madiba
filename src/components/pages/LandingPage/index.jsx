"use client";
import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CircledLogo from "../../../assets/logo-2.png";
import LandingImage from "../../../assets/pics5.jpg";
import BedroomPic from "../../../assets/new-pics9.png";
import BedroomPic2 from "../../../assets/new-pics1.png";
import HighLightPic2 from "../../../assets/new-pics2.png";
import HighLightPic3 from "../../../assets/new-pics3.png";
import HighLightPic4 from "../../../assets/new-pics4.png";
import HighLightPic5 from "../../../assets/new-pics5.png";
import SofaPic from "../../../assets/pics3.jpg";
import SofaPic2 from "../../../assets/pics9.jpg";
import styles from "../../../app/page.module.css";
import { FaPhone } from "react-icons/fa";
import useMediaQuery from "@mui/material/useMediaQuery";
import FooterSection from "../FooterSection";
import HeaderSection from "../HeaderSection";

const LandingPage = () => {
  const matches1 = useMediaQuery("(min-width:1200px)");
  const matches2 = useMediaQuery("(min-width:970px)");
  const router = useRouter();

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
      <Box className={styles.backgroundContainer}>
        <Grid container className={styles.overlay}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              sx={{
                color: "secondary.main",
                fontSize: { lg: "3em", md: "2.5em", sm: "2em", xs: "2em" },
                textAlign: "center",
              }}
            >
              Madiba Homes & Apartments
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { lg: "1em", md: "1em", sm: "0.8em", xs: "0.8em" },
                textAlign: "center",
              }}
            >
              Where every stay is a memorable getaway...
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 0 0 0",
          backgroundColor: "background.default",
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: { lg: "3rem", md: "3rem", sm: "1em", xs: "1em" },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{
              padding: { lg: "3rem", md: "3rem", sm: "1em", xs: "1em" },
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            <Grid>
              <Typography
                sx={{
                  fontSize: { lg: "3.7em", md: "3em", sm: "2em", xs: "2em" },
                  textAlign: "left",
                }}
              >
                Welcome to your palace of comfort and extravagance
              </Typography>
            </Grid>
            <Grid sx={{ padding: "0.5rem 0 0 0" }}>
              <Typography
                sx={{
                  fontSize: { lg: "1em", md: "1em", sm: "0.8em", xs: "0.8em" },
                  width: "80%",
                }}
              >
                Step into a world where luxury meets relaxation, and experience
                the finest hotel services. Our outstanding hospitality ensures
                your stay is unforgettable.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{
              padding: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={BedroomPic}
              alt="bedroom-pics"
              width={matches1 ? 450 : 250}
              height={matches1 ? 450 : 250}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 0 0 0",
          backgroundColor: "background.default",
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: { lg: "3rem", md: "3rem", sm: "1em", xs: "1em" },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{
              padding: { lg: "3rem", md: "3rem", sm: "1em", xs: "1em" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={BedroomPic2}
              alt="bedroom-pics"
              width={matches1 ? 450 : 250}
              height={matches1 ? 450 : 250}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{
              padding: { lg: "3rem", md: "3rem", sm: "1em", xs: "1em" },
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            <Grid>
              <Typography
                sx={{
                  fontSize: { lg: "3.7em", md: "3em", sm: "2em", xs: "2em" },
                  textAlign: "left",
                  width: "95%",
                }}
              >
                Indulge in Exceptional Services and Amenities
              </Typography>
            </Grid>
            <Grid sx={{ padding: "0.5rem 0 0 0" }}>
              <Typography
                sx={{
                  fontSize: { lg: "1em", md: "1em", sm: "0.8em", xs: "0.8em" },
                  width: "80%",
                }}
              >
                From rejuvenating spa treatments to exquisite dining options,
                we’ve got everything you need to unwind and pursue pleasure.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100%",
          padding: "2rem 0 2rem 3rem",
          backgroundColor: "primary.main",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            padding: {
              lg: "0 0 2rem 2rem",
              md: "0 0 2rem 2rem",
              sm: "0 0 0 0",
              xs: "0 0 0 0",
            },
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{
              margin: { xs: "0 0 0 -2rem" },
              padding: { xs: "0 0 1rem 0" },
              display: "flex",
              justifyContent: { lg: "flex-start" },
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "3em", md: "2.5em", sm: "2em", xs: "2em" },
                fontWeight: "550",
                color: "#C7B70B",
                textAlign: "center",
              }}
            >
              Hotel Highlights
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            alignItems: { lg: "flex-start" },
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={5}
            md={5}
            lg={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { lg: "flex-end", md: "flex-end" },
            }}
          >
            <Grid sx={{ padding: "0 0 2rem 0" }}>
              <Image
                src={HighLightPic4}
                alt="highlight-one"
                width={matches1 ? 450 : matches2 ? 350 : 250}
                height={matches1 ? 450 : matches2 ? 350 : 250}
              />
            </Grid>
            <Grid sx={{ padding: { sm: "0 0 2rem 0", xs: "0 0 2rem 0" } }}>
              <Image
                src={HighLightPic5}
                alt="highlight-two"
                width={matches1 ? 450 : matches2 ? 350 : 250}
                height={matches1 ? 700 : matches2 ? 600 : 600}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={5}
            lg={5}
            sx={{ marginLeft: { lg: "2rem", md: "2rem" } }}
          >
            <Grid sx={{ padding: "0 0 2rem 0" }}>
              <Image
                src={HighLightPic2}
                alt="highlight-three"
                width={matches1 ? 450 : matches2 ? 350 : 250}
                height={matches1 ? 700 : matches2 ? 600 : 600}
              />
            </Grid>
            <Grid>
              <Image
                src={HighLightPic3}
                alt="highlight-four"
                width={matches1 ? 450 : matches2 ? 350 : 250}
                height={matches1 ? 450 : matches2 ? 350 : 250}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <FooterSection />
    </Box>
  );
};

export default LandingPage;
