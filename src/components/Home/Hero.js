import React, { useContext } from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import text from "./text/heroText";
import { SettingContext } from "../../context/SettingContext";
import animations from "../animation";
import desktop2 from "./img/desktop2.png";
import mobile2 from "./img/mobile2.png";

//Hero components: title, text , button , application mockup
const Hero = () => {
  const { lang } = useContext(SettingContext);

  return (
    <Container>
      <div className="wrapper">
        <div className="text-box">
          <motion.h1
            {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {text.title[lang]}
          </motion.h1>
          <motion.p
            {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {text.p1[lang]}
          </motion.p>
          <motion.div key={"try"}
              {...animations.fadeInFromUp}
              transition={{ duration: 0.5, delay: 0.6 }}>
            <motion.button
              
              className="try-button"
            >
              {text.tryButton[lang]}
            </motion.button>
          </motion.div>
        </div>
        <div className="image-box">
          <motion.img
            alt="device"
            initial={{ scaleY: 0.8, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={desktop2}
          />
          <motion.img
            alt="device"
            initial={{ scaleY: 0.8, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            src={mobile2}
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
        width: clamp(300px, 60%, 600px);
        color: var(--main-p);
        margin-bottom: 10px;
      }

      button {
        margin: 20px 0;
        padding: 18px 0;
      }
    }

    .image-box {
      position: relative;
      margin-bottom: -100px;
      @media (max-width: 800px) {
        margin-bottom: -50px;
      }
    }

    img {
      width: 95%;
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

  .wave {
    position: absolute;
    bottom: 0;
    width: 100vw;
  }
`;

export default Hero;
