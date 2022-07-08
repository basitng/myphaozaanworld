import React from "react";
import Lottie from "react-lottie";
import { Box, Hidden, IconButton, Typography } from "@mui/material";
import AnimationData from "../../../public/lottie/6863-tenor.json";
import {
  PlayCircleOutline,
  StopCircleOutlined,
  WavesOutlined,
} from "@mui/icons-material";

export default function Dreams() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          mt: 10,
          p: 10,
          display: "grid",
          placeContent: "center",

          background: "linear-gradient(90deg, var(--theme3), var(--theme4))",
        }}
      >
        <Box className="p50_5" sx={{ padding: "50px 200px" }}>
          <Typography
            color="white"
            className="responsive--h1"
            align="center"
            variant="h1"
          >
            Your <span className="block--span">Dreams Are</span> More Achievable
            <span className="color--base2"> With Us</span>
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Hidden smDown>
            {" "}
            <Lottie options={defaultOptions} height={600} width={600} />
            <Lottie options={defaultOptions} height={600} width={600} />
          </Hidden>
          <Hidden lgUp>
            <Lottie options={defaultOptions} height={400} width={400} />
          </Hidden>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#fff",
            borderRadius: "48px",
            width: 150,
            padding: "10px 20px",
          }}
        >
          <IconButton>
            <StopCircleOutlined />
          </IconButton>
          <IconButton>
            <PlayCircleOutline />
          </IconButton>
          <IconButton>
            <WavesOutlined />
          </IconButton>
        </Box>
      </Box>
    </React.Fragment>
  );
}
