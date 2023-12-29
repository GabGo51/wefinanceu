import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import investor from "./img/investors.png";
import broker from "./img/brokers.png";
import banks from "./img/banks.png";
import text from './text/whoText'
import { SettingContext } from "../../context/SettingContext";


//section showing target audience of the app 

const Who = () => {

  const {lang} = useContext(SettingContext)

  return (
    <Container>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {text.title[lang]} <span>{text.span[lang]}</span>
      </motion.h2>
      <div className="wrapper">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img alt="icon" src={investor} />
          <h3>{text.sub1[lang]}</h3>
          <p>
          {text.p1[lang]}
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <img alt="icon" src={broker} />
          <h3>{text.sub2[lang]}</h3>
          <p>
          {text.p2[lang]}
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <img alt="icon" src={banks} />
          <h3>{text.sub3[lang]}</h3>
          <p>
          {text.p3[lang]}
          </p>
        </motion.div>
      </div>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="try-button"
      >
        {text.button[lang]}
      </motion.button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: var(--main);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 100px;
  color: white;

  h2 {
    text-align: center;
    margin: 50px 50px;
  }

  h2 ,h3 {
    color: white;
  }

  span{
    color: var(--green);
  }

  .wrapper {
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 50px;
    
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      margin: 10px;
      padding: 25px 20px;
      width: clamp(300px, 30%, 345px);
      height: 340px;
      background-color: var(--faded-grey);
      border-radius: 30px;
      box-shadow: 1px 5px 13.3px 0px rgba(0, 0, 0, 0.10);
    }
  }
`;

export default Who;
