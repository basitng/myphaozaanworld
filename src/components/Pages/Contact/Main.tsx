import React from "react";
import { Box } from "@mui/material";
import Breadcrum from "../../Breadcrum";
import { Footer } from "../../Sections";
import Contact from "../../Sections/Contact";

export default function Main({ trigger }: any) {
  return (
    <React.Fragment>
      <div ref={trigger}>
        <Breadcrum header="Contact Us Today" img={"/images/art2.jpg"} />
      </div>
      <Box>
        <Contact />
      </Box>
      <Footer />
    </React.Fragment>
  );
}
