import React from "react";
import wave from "./img/productwave.png";
import styled from "styled-components";
import { motion } from "framer-motion";
const Benefits = () => {
  return (
    <Container>
      <img className="wave" src={wave} />
      <h2>Save time & money with one complete solution.</h2>
      <div className="wrapper">
        <Text>
          <div>
            <h3>Avantage 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu
              cursus vitae congue. Sed blandit libero volutpat sed cras ornare
              arcu dui. Dictum non consectetur a erat nam at lectus urna
            </p>
          </div>
          <div>
            <h3>Avantage 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu
              cursus vitae congue. Sed blandit libero volutpat sed cras ornare
              arcu dui. Dictum non consectetur a erat nam at lectus urna
            </p>
          </div>
          <div>
            <h3>Avantage 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu
              cursus vitae congue. Sed blandit libero volutpat sed cras ornare
              arcu dui. Dictum non consectetur a erat nam at lectus urna
            </p>
          </div>
          <div>
            <h3>Avantage 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu
              cursus vitae congue. Sed blandit libero volutpat sed cras ornare
              arcu dui. Dictum non consectetur a erat nam at lectus urna
            </p>
          </div>
        </Text>
        <Img>
          <div></div>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="try-button"
          >
            Try it free
          </motion.button>
        </Img>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2{
    color: var(--main);
    margin-bottom: 80px;
  }

  .wave {
    position: absolute;
    top: 0;
    width: 100vw;
  }
`;

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:start;
  gap: 20px;
  
  h3{
    color: var(--main);
  }

  p{
    color: var(--main-p);
  }

  div {
    width: 40%; /* Adjust the width as needed */
    margin-bottom: 10px; /* Add margin between items */
    box-sizing: border-box;
    
    padding: 10px;
  }
`;

const Img = styled.div`
  position: relative;
  div {
    background-color: green;
    width: 400px;
    height: 600px;
    border-radius: 40px;
  }

  button{
    position: absolute;
    bottom: 30px;
    right: 120px;
  }
`;
export default Benefits;
