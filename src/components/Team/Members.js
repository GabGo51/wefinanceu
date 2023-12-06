import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import alexis from './img/alexis.PNG'
import sabrina from './img/sabrina.PNG'
const Members = () => {
  return (
    <Container>
      <motion.div
        className="color-box"
        initial={{ scaleY:0.7}}
        //since % dont work have to use auto
        whileInView={{ scaleY:1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="wrapper">
          <motion.img initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ duration: 0.5, delay: 0.5 }} src={alexis}/>
          <motion.img initial={{y:50, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ duration: 0.5, delay: 0.5 }} src={sabrina}/>

        </div>
      </motion.div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  img {
    width: clamp(200px, 50%, 300px);
    object-fit: cover;
  }

  h2 {
    color: #015d85;
    margin: 0;
  }

  p {
    margin: 20px 0;
    font-size: clamp(14px, 30%, 16px);
  }

  .color-box {
    transform-origin: bottom;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--light-color);
    padding: 50px 0;
  }

  .wrapper {
    justify-content: space-around;
    

    @media (max-width: 950px) {
      flex-direction: column-reverse;

    }
  }

  
`;

export default Members