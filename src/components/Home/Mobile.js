import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import mobile from "./img/mobile.png";

import text from './text/mobileText'
import { SettingContext } from "../../context/SettingContext";

const Mobile = () => {

  const {lang} = useContext(SettingContext)
  return (
    <Container>
      <img alt="phone" src={mobile} />
      <div className="wrapper">
        <div className="text-box">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {text.title[lang]}
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {text.p[lang]}
          </motion.p>
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="try-button"
          >
            {text.button[lang]}
          </motion.button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 50px;
  margin-top: 50px;
  background-color: #fbfbfb;
  height: 700px;
  img {
    width: clamp(300px, 35%, 500px);
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .wrapper {
    position: relative;
    .text-box {
      position: absolute;
      display: flex;
      flex-direction: column;
      right: 0;
      margin-right: 50px;
      width: clamp(320px, 60%, 600px);
      margin: 20px;

      h2 {
        margin-bottom: 40px;
        font-size: clamp(26px, 3vw, 42px);
      }

      p {
        color: var(--main-p);
      }

      button {
        margin: 40px 0;
        padding: 18px 0;
      }
    }
  }

  @media (max-width: 800px) {
    .text-box {
      transform: translateX(20%);
    }
  }
  @media (max-width: 650px) {
    .text-box {
      transform: translate(-0%, -60%);
      width: 500px;
    }
  }
  @media (max-width: 650px) {
    .text-box {
      transform: translate(10%, -60%);
      width: 500px;
    }
  }


  
`;

export default Mobile;
