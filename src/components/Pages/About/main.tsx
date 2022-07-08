import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Breadcrum from "../../Breadcrum";
import { Footer, WhyUs } from "../../Sections";

export default function Main({ trigger }: any) {
  const addmission = [
    { name: "Students Should with their parent" },
    { name: "Pass Entry Test" },
    { name: "NEPA Bills" },
    { name: "A copy of NIN Slip" },
  ];
  return (
    <React.Fragment>
      <div ref={trigger}>
        <Breadcrum
          header="ABOUT PHAOZAN SCHOOLS"
          img={"/images/spelling.jpg"}
        />
      </div>
      <Container>
        <Box sx={{ mt: 12 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            School History
          </Typography>
          <Typography
            sx={{ lineHeight: "2rem" }}
            variant="body1"
            color="GrayText"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            nemo asperiores vitae at nam eius, odit sequi temporibus placeat
            dolores reprehenderit harum aperiam, eaque officia sit numquam. Quod
            mollitia incidunt facilis obcaecati odit laboriosam non, sint
            excepturi delectus placeat enim natus reiciendis tempore blanditiis
            eius ratione fuga quibusdam quaerat doloribus ea eligendi minus!
            Natus dolorum aliquid voluptates distinctio sequi hic dicta, debitis
            tenetur aliquam officiis adipisci repellendus delectus numquam. Ad?
          </Typography>
        </Box>
        <Box sx={{ mt: 12 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            School Philosophy
          </Typography>
          <Typography
            sx={{ lineHeight: "2rem" }}
            variant="body1"
            color="GrayText"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            nemo asperiores vitae at nam eius, odit sequi temporibus placeat
            dolores reprehenderit harum aperiam, eaque officia sit numquam. Quod
            mollitia incidunt facilis obcaecati delectus numquam. Ad?
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          mt: 7,
          color: "#fff",
          background: "var(--theme3)",
          p: "100px 40px",
        }}
        className="p50_5"
      >
        <Typography sx={{ mb: 7 }} align="center" variant="h3">
          Phaozan Schools{" "}
          <span className="block--span">Mission and Vision</span>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              variant="outlined"
              sx={{ background: "transparent", borderRadius: 3 }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  Mission Statement
                </Typography>
                <Typography sx={{ color: "#ddd" }} variant="body1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum voluptatum illo doloremque dicta nobis repellendus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              variant="outlined"
              sx={{ background: "transparent", borderRadius: 3 }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  Vision Statement
                </Typography>
                <Typography sx={{ color: "#ddd" }} variant="body1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum voluptatum illo doloremque dicta nobis repellendus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <WhyUs />
        <Box
          sx={{
            position: "relative",
            background: "var(--theme2)",
            p: 10,
            borderRadius: 4,
            display: "block",
            m: "3rem 0rem 6rem",
          }}
          className="p50_5"
        >
          <Typography sx={{ mt: 6 }} variant="body2">
            Admission Requirements
          </Typography>
          <Typography
            sx={{ width: 550 }}
            className="responsive--width responsive--h3"
            variant="h3"
          >
            Get your wards enroll into{" "}
            <span className="block--span">Phaozan schools Today</span>
          </Typography>
          <ul className="list">
            {addmission.map((items) => (
              <li key={items.name}>{items.name}</li>
            ))}
          </ul>
          <Box
            sx={{
              width: 200,
              height: 200,
              position: "absolute",
              background: "#fff",
              top: "-20%",
              right: "10%",
              borderRadius: 50,
            }}
            className="mobile--circle"
          />
        </Box>
      </Container>

      <Footer />
    </React.Fragment>
  );
}
