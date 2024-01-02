import React, { useContext } from "react";
import wave from "./img/productwave.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import text from "./text/benefitsText";
import { SettingContext } from "../../context/SettingContext";
import animations from "../animation";

//benefit component under product component: 4 block of text and an image\link
const Benefits = () => {
  
  const { lang } = useContext(SettingContext);

  return (
    <Container>
      <img className="wave" src={wave} />
      <motion.h2
        {...animations.fadeInFromUp}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {text.title[lang]}
      </motion.h2>
      <div className="wrapper">
        <Text>
          <motion.div
            {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <h3>{text.sub1[lang]}</h3>
            <p>{text.p1[lang]}</p>
          </motion.div>
          <motion.div
            {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3>{text.sub2[lang]}</h3>
            <p>{text.p2[lang]}</p>
          </motion.div>
          <motion.div
           {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3>{text.sub3[lang]}</h3>
            <p>{text.p3[lang]}</p>
          </motion.div>
          <motion.div
            {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3>{text.sub4[lang]}</h3>
            <p>{text.p4[lang]}</p>
          </motion.div>
        </Text>
        <Img>
          <div>
            <motion.button
             {...animations.fadeInFromDown}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="try-button"
            >
              {text.button[lang]}
            </motion.button>
          </div>
        </Img>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding-top: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;

  h2 {
    color: var(--main);
    margin-bottom: 80px;
    text-align: center;
    margin: 60px 40px;
  }

  .wave {
    position: absolute;
    top: 0;
    width: 100vw;
  }

  .wrapper {
    @media (max-width: 1350px) {
      flex-direction: column;
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;
  max-width: 800px;

  h3 {
    color: var(--main);
  }

  p {
    color: var(--main-p);
  }

  div {
    width: clamp(270px, 50%, 320px); /* Adjust the width as needed */
    margin-bottom: 10px; /* Add margin between items */
    box-sizing: border-box;
    padding: 10px;
  }
`;

const Img = styled.div`
  width: clamp(300px, 50%, 400px);

  div {
    position: relative;
    background-color: grey;
    height: 600px;
    border-radius: 40px;
  }

  button {
    position: absolute;
    bottom: 5%;
    right: 30%;
  }
`;
export default Benefits;
