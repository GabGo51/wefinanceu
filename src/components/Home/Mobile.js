import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import mobile from "./img/mobile.png";
import text from "./text/mobileText";
import { SettingContext } from "../../context/SettingContext";
import animations from "../animation";
import TryButton from "../TryButton";



//component showcasing the phone version and another link to try free
const Mobile = () => {
  const { lang } = useContext(SettingContext);

  return (
    <Container>
      <motion.img
        {...animations.fadeInFromLeft}
        transition={{ duration: 1, delay: 0.2 }}
        alt="phone"
        src={mobile}
      />
      <div className="wrapper">
        <div className="text-box">
          <motion.h2
            {...animations.fadeInFromRight}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {text.title[lang]}
          </motion.h2>
          <motion.p
            {...animations.fadeInFromRight}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {text.p[lang]}
          </motion.p>
          <TryButton animation={animations.fadeInFromRight}/>
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
        width: clamp(300px, 80%, 600px);
      }

      button {
        margin: 40px 0;
        padding: 18px 0;
      }
    }
  }

  @media (max-width: 820px) {
    .text-box {
      transform: translateX(10%);
    }
  }
  
  @media (max-width: 750px) {
    .text-box {
      transform: translate(5%, -60%);
      width: 500px;
    }
  }
`;

export default Mobile;
