import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import Stats from "./Stats";
import Partner from "./Partner";
import Values from "./Values";
import Team from "./Team";
import Members from "./Members";

const About = () => {
  return (
    <Container>
      <Values />
      <Stats />
      <Partner />
      <Team />
    </Container>
  );
};

const Container = styled.div``;

export default About;
