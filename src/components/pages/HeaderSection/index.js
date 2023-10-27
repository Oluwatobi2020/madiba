"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Grid, Typography } from "@mui/material";
import CircledLogo from "../../../assets/logo-2.png";
import { FaPhone } from "react-icons/fa";

const HeaderSection = () => {
  const router = useRouter();
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: {
              lg: "1rem 3rem 0 3rem",
              md: "1rem 3rem 0 3rem",
              sm: "1rem",
              xs: "1rem",
            },
          }}
        >
          <Grid
            onClick={() => router.push("/")}
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-start",
              cursor: "pointer",
            }}
          >
            <Image src={CircledLogo} alt="madiba-logo" />
          </Grid>
          <Grid
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <FaPhone size={15} color="#fff" />
            <Typography
              sx={{
                color: "#fff",
                margin: "0 0 0 1rem",
                fontSize: {
                  lg: "0.8em",
                  md: "0.8em",
                  sm: "0.8em",
                  xs: "0.6em",
                },
              }}
            >
              +234 803 0000 000
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderSection;
