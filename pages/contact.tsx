import React from "react";
import { useInView } from "react-intersection-observer";
import { Appbar } from "../src/components/AppBar";
import { Main } from "../src/components/Pages/Contact";

export default function Contact() {
  const { ref: myRef, inView, entry } = useInView();

  const changeText = inView ? "#fff" : "#555";
  const changeBg = inView ? "transparent" : "#fff";
  const changeElev = inView ? 0 : 1;

  return (
    <React.Fragment>
      <Appbar color={changeText} raised={changeElev} bg={changeBg} />
      <Main trigger={myRef} />
    </React.Fragment>
  );
}
