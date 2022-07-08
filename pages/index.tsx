import React from "react";
import { Container } from "@mui/material";
import type { NextPage } from "next";
import { useInView } from "react-intersection-observer";

import { Appbar } from "../src/components/AppBar";
import { Banner } from "../src/components/Banner";
import {
  About,
  Dreams,
  Events,
  Footer,
  Testimonials,
  WhyUs,
} from "../src/components/Sections";
import Contact from "../src/components/Sections/Contact";

const Home: NextPage = () => {
  const { ref: myRef, inView, entry } = useInView();

  const changeText = inView ? "#fff" : "#555";
  const changeBg = inView ? "transparent" : "#fff";
  const changeElev = inView ? 0 : 1;

  return (
    <React.Fragment>
      <Appbar color={changeText} raised={changeElev} bg={changeBg} />
      <div ref={myRef}>
        <Banner />
      </div>
      <Container sx={{ width: "100%" }}>
        <About />
      </Container>
      <div>
        <Dreams />
      </div>
      <Container sx={{ width: "100%" }}>
        <WhyUs />
        <Events />
      </Container>
      <Testimonials />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
