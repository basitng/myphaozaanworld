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
              Greetings and
            </Typography>
            <Typography
              sx={{ width: "70%" }}
              className="responsive--h3"
              variant="h3"
            >
              Welcome Address from the Proprietor
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ lineHeight: "2.1rem" }}
            color="GrayText"
          >
            On behalf of the management, staff and students of Phaozaan School,
            I welcome you to our official website. Phaozaan School Lagos is an
            islamic school founded August 17th 2018, situated at 3 Olayemi
            Street, Lagos Island, LagosAt Phaozaan School, excellence is our
            watch word, we believe that whatever is worth doing at all is worth
            doing well, we seek to establish this standard in our every
            operations and instill this value in our Wards.Every boy child
            committed in our care is guaranteed quality education under skilled
            instructors. We aim to establish a solid foundation for all our
            Children through their academic and professional journey in life. We
            are also interested in the physical, social and psychological
            development of our Students, edging them to become responsible and
            impact driven members of society.Our facilities are up-to-date
            making us infra-structurally positioned to deliver quality education
            to your children. We welcome applications from all parts of the
            country. We are ever ready to make Kings out of your male
            wards.Connect with us via kingscollegelagos@yahoo.com. We look
            forward to having a rewarding relationship with you.Welcome to our
            Website!
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
