import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Stats from "./Stats";
import Product from "./Product";
import Review from "./Review";
import Mobile from "./Mobile";
import Benefits from "./Benefits";
import Who from "./Who";

//main component for the home page with all sections
const Home = () => {
  return (
    <Container>
      <Hero />
      <Stats />
      <Product />
      <Benefits />
      <Who />
      <Review />
      <Mobile />
    </Container>
  );
};

const Container = styled.div`

  padding-top: 50px;

  @media (max-width: 800px) {
    padding-top: 20px;
  }
`;
export default Home;
