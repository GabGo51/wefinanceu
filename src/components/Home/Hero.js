import React from "react";
import styled from "styled-components";
import screen from "./img/screen.PNG";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="text-box">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A simple plateform, solution for all your problems
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            ahjfljabvlabvlablvabglbalgblagbl ajvfkahjf asfgahgfl b
            agflahjbflablfablzn v.z,nm gzkjgjkhzgjkhz{" "}
          </motion.p>
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="login-button"
          >
            Try it free
          </motion.button>
        </div>

        <motion.img
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          src={screen}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding-bottom: 30px;

  .wrapper {
    .text-box {
      display: flex;
      flex-direction: column;
      margin-right: 50px;

      h1 {
        margin-bottom: 40px;
        font-size: clamp(24px, 3vw, 40px);
      }

      p {
      }

      button {
        margin: 40px 0;
        padding: 18px 0;
      }
    }

    img {
      border-radius: 30px;
      width: clamp(300px, 50%, 550px);
    }

    @media (max-width: 950px) {
      flex-direction: column;
      .text-box {
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: 0;
        max-width: 500px;
      }
    }
  }
`;

export default Hero;
