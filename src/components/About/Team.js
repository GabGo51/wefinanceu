import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import Members from "./Members";

const Team = () => {
  return (
    <Container>
      <Intro />
      <Members />
    </Container>
  );
};

const Container = styled.div``;

export default Team;
