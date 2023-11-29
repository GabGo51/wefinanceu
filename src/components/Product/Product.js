import React from "react";
import styled from "styled-components";
import HowTo from "./HowTo";
import Profiles from "./Profiles";

const Product = () => {
  return (
    <Container>
      <HowTo />
      <Profiles />
    </Container>
  );
};
const Container = styled.div``;

export default Product;
