import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Stats from "./Stats";
import Product from "./Product";
import Team from "./Team";
import Review from "./Review";
import Mobile from "./Mobile";

const Home = () => {
  return (
    <Container>
      <Hero/>
      <Stats/>
      <Product/>
      <Team/>
      <Review/>
      <Mobile/>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
`;
export default Home;
