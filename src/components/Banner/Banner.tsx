import React from "react";
import Lottie from "react-lottie";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { Box, Button, Grid, Typography, Hidden } from "@mui/material";
import AnimationData from "../../../public/lottie/28683-globe-world-animation.json";

export default function Banner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "url(/images/banner2.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "@media screen and(max-width: 600px)": {
          width: "100%",
        },
        "&::before": {
          content: `""`,
          height: "100%",
          width: "100%",
          background: "#000",
          opacity: 0.8,
          position: "absolute",
          top: 0,
          left: 0,
        },
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          p: 15,
          position: "relative",
          zIndex: 2,
        }}
        className="p100_10"
      >
        <Grid sx={{ color: "#fff", width: "100%" }} item xs={12} md={7}>
          <Typography className="responsive--h2" variant="h2">
            Welcome to Phaozan{" "}
            <span className="color--base">Citadel of learning</span>.
          </Typography>
          <Typography variant="h6">
            We offer our wards it best of it services
          </Typography>
          <Button
            size="large"
            sx={{ mt: 3 }}
            variant="contained"
            color="primary"
            disableElevation
            endIcon={<ArrowForwardIosOutlined />}
          >
            Explore now
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <Hidden smDown>
            <Lottie options={defaultOptions} height={400} width={400} />
          </Hidden>
          <Hidden lgUp>
            {" "}
            <Lottie options={defaultOptions} height={300} width={300} />
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
}
