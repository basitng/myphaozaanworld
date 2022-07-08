import { Box, Typography } from "@mui/material";
import React from "react";

interface featureProps {
  img: string;
  header: string;
}
export default function Breadcrum({ img, header }: featureProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        display: "grid",
        placeContent: "center",
        placeItems: "center",
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
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
      <Typography
        color="white"
        className="responsive--h2"
        sx={{ position: "relative", zIndex: 1 }}
        variant={"h2"}
      >
        {header}
      </Typography>
    </Box>
  );
}
