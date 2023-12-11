import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Stats from "./Stats";
import Product from "./Product";
import Review from "./Review";
import Mobile from "./Mobile";
import Benefits from "./Benefits";
import Who from "./Who";


const Home = () => {
  return (
    <Container>
      <Hero/>
      <Stats/>
      <Product/>
      <Benefits/>
      <Who/>
      <Review/>
      <Mobile/>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
`;
export default Home;
