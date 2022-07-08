import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useId } from "react";
import Breadcrum from "../../Breadcrum";
import { Footer } from "../../Sections";

export default function Main({ trigger }: any) {
  return (
    <React.Fragment>
      <div ref={trigger}>
        <Breadcrum header="Enroll Today" img={"/images/banner1.jpg"} />
      </div>
      <Container sx={{ mb: 10, mt: 15 }}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography variant="h4">Apply To Phaozan Online</Typography>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="standard"
                    fullWidth
                    helperText="Child details"
                    label="First Name"
                    sx={{ m: 1 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  {" "}
                  <TextField
                    variant="standard"
                    fullWidth
                    helperText="Child details"
                    label="Middle Name"
                    sx={{ m: 1 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  {" "}
                  <TextField
                    variant="standard"
                    fullWidth
                    helperText="Child details"
                    label="Last Name"
                    sx={{ m: 1 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="standard"
                    fullWidth
                    helperText="Child details"
                    label="First Name"
                    sx={{ m: 1 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="standard"
                    fullWidth
                    helperText="Parent details"
                    label="Parent Name"
                    sx={{ m: 1 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="standard"
                    fullWidth
                    helperText="Parent details"
                    label="Parent Phone or Email"
                    sx={{ m: 1 }}
                  />
                  <br />
                  <Button variant="contained" size="large" disableElevation>
                    Submit Form
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
