import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import Breadcrum from "../../Breadcrum";
import { Footer, WhyUs } from "../../Sections";

export default function Main({ trigger }: any) {
  const { pathname } = useRouter();
  console.log("I am ", pathname);
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
            Phaozaan Private School was founded in 2012 by Mr. & Mrs.
            Makanjuola. It became operational on the 9th of September, 2013.The
            school is located at No. 13, Alhaja Mojisola Thanni Street, Behind
            Ikorodu Grammar School, Oke Ota-ona, Ikorodu, Lagos Nigeria. It was
            first name HAZMART ACADEMY now PHAOZAAN PRIVATE SCHOOL. Phaozaan
            Private School is an Educational establishment that comprises of;
            Child Care, Early Years, Kindergarten and Basic classes. Phaozaan
            Private School caters for the educational needs, using Montessori
            Method of nurturing children. We value not only academic success but
            also encourage moral values and talents of all kinds. Our greatest
            desire is to build leaders who will blaze the trail in the world
          </Typography>
        </Box>
        <Box sx={{ mt: 12 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Dicipline
          </Typography>
          <Typography
            sx={{ lineHeight: "2rem" }}
            variant="body1"
            color="GrayText"
          >
            Discipline is a major ingredient for success and this administration
            will take issue of discipline very serious. In my years of
            experience I have seen self-discipline as a major factor for success
            and discipline in an organization, particularly a school system as
            precursor to conducive learning environment. Every child must be
            given the right atmosphere to achieve his potentials. It is against
            this background that I wish to admonish parents/guardians to impress
            it upon their children/wards that tramping on other students rights
            and distortion of private comfort will attract commensurate
            sanctions. Other common conducts of indiscipline are equally
            condemned in strong terms and will be visited with appropriate
            sanctions. This era will expect people to be ready to take
            responsibility for the consequents of their actions. I am currently
            reviewing general conducts of the students and hope to see the best
            that a school environment can accommodate. Meanwhile parents are to
            note that this administration has zero tolerance for indiscipline. I
            further advise parents to deliberately monitor the activities of
            their children and counsel them to eschew immoral conduct. The
            College has no room for morally bankrupt children. Be informed that
            there is provision for withdrawal on the basis of intolerable moral
            laxity.
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
