import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function About() {
  return (
    <Box sx={{ pt: 10 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={7}>
          <Box sx={{ m: "1rem 0" }}>
            <Typography variant="body2" className="tin">
              Historical background
            </Typography>
            <Typography
              sx={{ width: "70%" }}
              className="responsive--h3"
              variant="h3"
            >
              Phaozan Since 2013 till now
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ lineHeight: "2.1rem" }}
            color="GrayText"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            aperiam, perferendis veritatis doloribus ab cupiditate, obcaecati
            commodi distinctio consequatur, enim laudantium minima facilis
            possimus rem adipisci soluta dicta sapiente molestiae nihil expedita
            sint id ad sit autem. Iure, veritatis dicta itaque numquam, enim
            blanditiis at non possimus impedit eaque consectetur!
          </Typography>
          <Button
            sx={{ mt: 3 }}
            disableElevation
            variant="contained"
            color="primary"
            size="large"
          >
            Learn more
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src="/images/principal.jpg" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  );
}
