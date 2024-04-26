import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Intro from "./Intro";
import Review from "./Review";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <Container>
      <motion.div
        initial={{ scaleY: 0.7 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8 }}
        className="blue"
      >
        <div className="wrapper">
          <Intro />
          <Form />
        </div>
      </motion.div>
      <Review />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;

  .blue {
    padding-bottom: 100px;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--main);
    transform-origin: top;
    
  }

  .wrapper {
    @media (max-width: 950px) {
      flex-direction: column;
    }
  }
`;

export default Contact;
