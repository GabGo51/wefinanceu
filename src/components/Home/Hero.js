import React from "react";
import styled from "styled-components";
import desktop from "./img/desktop.png";
import { motion } from "framer-motion";
import mobile from "./img/mobile.png";

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
            Commercial real estate financing, simplified
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Nous simplifions l'accès au financement en immobilier commercial
            pour tous, que vous soyez des débutants ou des experts dans le
            secteur.
          </motion.p>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="try-button"
          >
            Try it free
          </motion.button>
        </div>
        <div className="image-box">
          <motion.img
            alt="device"
            initial={{ scaleY: 0.5, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={desktop}
          />
          <motion.img
            alt="device"
            initial={{ scaleY: 0.5, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            src={mobile}
            className="mobile"
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  .wrapper {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    .text-box {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-bottom: 25px;
        font-size: clamp(34px, 3vw, 56px);
      }

      p {
        max-width: 600px;
        color: var(--main-p);
      }

      button {
        margin: 30px 0;
        padding: 18px 0;
      }
    }

    .image-box {
      position: relative;
    }

    img {
      width: 100%;
      transform-origin: bottom;
    }

    .mobile {
      width: clamp(100px, 25%, 350px);
      position: absolute;
      right: -50px;
      bottom: 4px;
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
`;

export default Hero;
