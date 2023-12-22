import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Intro from "./Intro";
import Review from "./Review";
const Contact = () => {
  return (
    <Container>
      <div className="blue">
        <div className="wrapper">
          <Intro />
          <Form />
        </div>
      </div>
      <Review/>
    </Container>
  );
};
const Container = styled.div`
  
  
  width: 100%;

  .blue{
    padding-bottom: 100px;
    padding-top: 50px;
    display: flex;
  align-items: center;
  justify-content: center;
    width: 100%;
    background-color: var(--main);
  }

  .wrapper {
    @media (max-width: 950px) {
      flex-direction: column;
      
    }
  }
`;

export default Contact;
