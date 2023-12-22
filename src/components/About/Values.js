import React, { useContext } from "react";
import styled from "styled-components";
import agility from "./img/agility.png";
import collab from "./img/collab.png";
import integrity from "./img/integrity.png";
import client from "./img/client.png";
import { motion } from "framer-motion";
import text from './text/valuesText'
import { SettingContext } from "../../context/SettingContext";

const Values = () => {

  const {lang} = useContext(SettingContext)
  const initial = {
    opacity: 0,
    y: 100,
  };

  const animate = {
    opacity: 1,
    y: 0,
  };
  return (
    <Container>
      
      <div className="wrapper">
        <motion.h2
          initial={initial}
          whileInView={animate}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {text.title[lang]}
        </motion.h2>{" "}
      </div>
      <div className="wrapper">
        <motion.div
          initial={initial}
          whileInView={animate}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          classname="value"
        >
          <img alt="icon" src={client} />
          <h3>{text.sub1[lang]}</h3>
          <p>
          {text.p1[lang]}
          </p>
        </motion.div>
        <motion.div
          initial={initial}
          whileInView={animate}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          classname="value"
        >
          <img alt="icon" src={integrity} />
          <h3>{text.sub2[lang]}</h3>
          <p>
          {text.p2[lang]}
          </p>
        </motion.div>
        <motion.div
          initial={initial}
          whileInView={animate}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          classname="value"
        >
          <img alt="icon" src={agility} />
          <h3>{text.sub3[lang]}</h3>
          <p>
          {text.p3[lang]}
          </p>
        </motion.div>
        <motion.div
          initial={initial}
          whileInView={animate}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          classname="value"
        >
          <img alt="icon" src={collab} />
          <h3>{text.sub4[lang]}</h3>
          <p>
          {text.p4[lang]}
          </p>
        </motion.div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary);
  padding-bottom: 150px;
 

  h2 {
    margin-top: 200px;
    margin-bottom: 80px;
    color: var(--main);
  }

  .wrapper {
    flex-wrap: wrap;
    align-items: start;
    gap: 10px;
    div {
      width: 49%;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      padding: 25px 20px;
      border-radius: 30px;
      min-height: 345px;
      box-shadow: 1px 5px 13.3px 0px rgba(0, 0, 0, 0.10);
      
    }

    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export default Values;
