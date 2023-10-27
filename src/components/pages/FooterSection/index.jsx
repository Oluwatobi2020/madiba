"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Grid, Button } from "@mui/material";

const FooterSection = () => {
    const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "2rem 0 2rem 3rem",
          backgroundColor: "primary.main",
        }}
      >
        <Grid container sx={{ padding: { lg: "0 0 2rem 2rem" } }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              sx={{
                fontSize: { lg: "3em", md: "2.5em", sm: "2em", xs: "2em" },
                fontWeight: "550",
                color: "#C7B70B",
              }}
            >
              Our Services
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          sx={{ width: "100%", padding: "1rem 3rem 3rem 3rem" }}
        >
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Grid>
              <Typography
                sx={{
                  color: "#C7B70B",
                  fontSize: {
                    lg: "1.2em",
                    md: "1em",
                    sm: "0.8em",
                    xs: "0.8em",
                  },
                }}
              >
                Spa Haven
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: {
                    lg: "0.8em",
                    md: "0.8em",
                    sm: "0.7em",
                    xs: "0.6em",
                  },
                  width: "70%",
                }}
              >
                Pamper yourself with our rejuvenating spa treatments and
                therapies.
              </Typography>
              <Button
                sx={{
                  color: "secondary.main",
                  border: "1px solid #F9F3B6",
                  fontSize: "0.5em",
                  marginTop: "1rem",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    border: "none",
                  },
                }}
                onClick={() => router.push("/spa")}
              >
                Learn more...
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Grid>
              <Typography
                sx={{
                  color: "#C7B70B",
                  fontSize: {
                    lg: "1.2em",
                    md: "1em",
                    sm: "0.8em",
                    xs: "0.8em",
                  },
                }}
              >
                Fine Dining
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: {
                    lg: "0.8em",
                    md: "0.8em",
                    sm: "0.7em",
                    xs: "0.6em",
                  },
                  width: "70%",
                }}
              >
                Feast on an array of delectable cuisines crafted by our master
                chefs.
              </Typography>
              <Button
                onClick={() => router.push("/dining")}
                sx={{
                  color: "secondary.main",
                  border: "1px solid #F9F3B6",
                  fontSize: "0.5em",
                  marginTop: "1rem",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    border: "none",
                    fontWeight: "600",
                  },
                }}
              >
                Learn more...
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Grid>
              <Typography
                sx={{
                  color: "#C7B70B",
                  fontSize: {
                    lg: "1.2em",
                    md: "1em",
                    sm: "0.8em",
                    xs: "0.8em",
                  },
                }}
              >
                Magnificent Suites
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: {
                    lg: "0.8em",
                    md: "0.8em",
                    sm: "0.7em",
                    xs: "0.6em",
                  },
                  width: "70%",
                }}
              >
                Relax in style and comfort in our lavishly furnished hotel
                suites.
              </Typography>
              <Button
                onClick={() => router.push("/suites")}
                sx={{
                  color: "secondary.main",
                  border: "1px solid #F9F3B6",
                  fontSize: "0.5em",
                  marginTop: "1rem",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    border: "none",
                    fontWeight: "600",
                  },
                }}
              >
                Learn more...
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Grid>
              <Typography
                sx={{
                  color: "#C7B70B",
                  fontSize: {
                    lg: "1.2em",
                    md: "1em",
                    sm: "0.8em",
                    xs: "0.8em",
                  },
                }}
              >
                Event Spaces
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: {
                    lg: "0.8em",
                    md: "0.8em",
                    sm: "0.7em",
                    xs: "0.6em",
                  },
                  width: "70%",
                }}
              >
                Host grand events in our versatile and elegant meeting rooms.
              </Typography>
              <Button
                onClick={() => router.push("/event-space")}
                sx={{
                  color: "secondary.main",
                  border: "1px solid #F9F3B6",
                  fontSize: "0.5em",
                  marginTop: "1rem",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    border: "none",
                    fontWeight: "600",
                  },
                }}
              >
                Learn more...
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Grid>
              <Typography
                sx={{
                  color: "#C7B70B",
                  fontSize: {
                    lg: "1.2em",
                    md: "1em",
                    sm: "0.8em",
                    xs: "0.8em",
                  },
                }}
              >
                Fit & Fab
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: {
                    lg: "0.8em",
                    md: "0.8em",
                    sm: "0.7em",
                    xs: "0.6em",
                  },
                  width: "70%",
                }}
              >
                Keep up with your fitness routine at our state-of-the-art gym.
              </Typography>
              <Button
                onClick={() => router.push("/fit-fab")}
                sx={{
                  color: "secondary.main",
                  border: "1px solid #F9F3B6",
                  fontSize: "0.5em",
                  marginTop: "1rem",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    border: "none",
                    fontWeight: "600",
                  },
                }}
              >
                Learn more...
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Grid>
              <Typography
                sx={{
                  color: "#C7B70B",
                  fontSize: {
                    lg: "1.2em",
                    md: "1em",
                    sm: "0.8em",
                    xs: "0.8em",
                  },
                }}
              >
                Swim & Chill
              </Typography>
            </Grid>
            <Grid>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: {
                    lg: "0.8em",
                    md: "0.8em",
                    sm: "0.7em",
                    xs: "0.6em",
                  },
                  width: "70%",
                }}
              >
                Unwind by our pristine pool, complete with a swanky poolside
                bar.
              </Typography>
              <Button
                onClick={() => router.push("/swimming-pool")}
                sx={{
                  color: "secondary.main",
                  border: "1px solid #F9F3B6",
                  fontSize: "0.5em",
                  marginTop: "1rem",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    border: "none",
                    fontWeight: "600",
                  },
                }}
              >
                Learn more...
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "primary.main",
          padding: "3rem 0 3rem 0",
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              sx={{
                fontSize: { lg: "4em", md: "3.5em", sm: "2.5em", xs: "2.5em" },
                textAlign: "center",
                color: "#C7B70B",
              }}
            >
              Ready to Indulge?
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              sx={{
                fontSize: "0.8em",
                textAlign: "center",
                width: "90%",
                color: "#fff",
              }}
            >
              Experience extravagance and impeccable services on your next
              getaway. Book now and treat yourself to the ultimate luxury hotel
              vacation.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              sx={{ background: "#C7B70B", color: "#fff", width: "140px" }}
            >
              Reserve Now
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FooterSection;
