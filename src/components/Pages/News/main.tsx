import { Container } from "@mui/system";
import React from "react";
import Breadcrum from "../../Breadcrum";
import { Events, Footer } from "../../Sections";

export default function Main({ trigger }: any) {
  return (
    <React.Fragment>
      <div ref={trigger}>
        <Breadcrum header="Latest News & Events" img={"/images/art1.jpg"} />
      </div>
      <Container sx={{ mb: 10 }}>
        <Events />
      </Container>
      <Footer />
    </React.Fragment>
  );
}
