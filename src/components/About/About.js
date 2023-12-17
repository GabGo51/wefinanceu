import React from "react";
import styled from "styled-components";
import Stats from "./Stats";
import Partner from "./Partner";
import Values from "./Values";
import Members from "./Members";

const About = () => {
  return (
    <Container>
      <Members/>
      <Values />
      <Stats />
      <Partner />
    </Container>
  );
};

const Container = styled.div``;

export default About;
