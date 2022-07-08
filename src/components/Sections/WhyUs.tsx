import React, { useId } from "react";
import {
  BabyChangingStationTwoTone,
  ComputerOutlined,
  NoiseAwareOutlined,
  SchoolOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";

export default function WhyUs() {
  const id = useId();
  const Reasons = [
    {
      title: "Qualified Teachers",
      bg: "var(--theme1-light)",
      color: "var(--theme1)",
      icon: <SchoolOutlined />,
      id,
    },
    {
      title: "Care and Support",
      bg: "var(--theme2-light)",
      color: "var(--theme2)",
      id,
      icon: <BabyChangingStationTwoTone />,
    },
    {
      title: "Technological Exposure",
      bg: "var(--theme3-light)",
      color: "var(--theme3)",
      id,
      icon: <ComputerOutlined />,
    },
    {
      title: "Conducieve Enviroment",
      bg: "var(--theme4-light)",
      color: "var(--theme4)",
      id,
      icon: <NoiseAwareOutlined />,
    },
    {
      title: "Secured Enviroment",
      bg: "var(--theme5-light)",
      color: "var(--theme5)",
      id,
      icon: <SecurityOutlined />,
    },
  ];
  return (
    <Box sx={{ mt: 10 }}>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box>
            <Typography variant="h3" color="GrayText">
              Why Choose Phaozan ? Because we train{" "}
              <span className="block--span">leaders not followers</span>
            </Typography>
          </Box>
          <Grid direction={"column"} sx={{ mt: 5 }} container spacing={2}>
            {Reasons.map((reason) => (
              <Grid
                key={reason.id}
                item
                xs={12}
                md={12}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IconButton size="large" sx={{ background: reason.bg }}>
                  {reason.icon}
                </IconButton>
                <Typography sx={{ ml: 1 }} variant="h5">
                  {reason.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
