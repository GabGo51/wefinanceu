import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import text from "./text/statsText";
import { SettingContext } from "../../context/SettingContext";
import animations from "../animation";

const Stats = () => {
  const { lang } = useContext(SettingContext);

  return (
    <Container>
      <motion.h2
        {...animations.fadeInFromDown}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {text.title1[lang]} <span>{text.title2[lang]}</span>{" "}
      </motion.h2>
      <div className="wrapper">
        <motion.div
          {...animations.fadeInFromDown}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3>Investors</h3>
          <h4>Investors</h4>
          <p>
            Aimeraient une plateforme en ligne pour suivre toutes leurs analyses
            facilement ainsi qu’un espace sécurisé pour analyser des propriétés
            qui ne sont pas publiquement annoncées
          </p>
        </motion.div>
        <motion.div
          {...animations.fadeInFromDown}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3>Investors</h3>
          <h4>Investors</h4>
          <p>
            Aimeraient une plateforme en ligne pour suivre toutes leurs analyses
            facilement ainsi qu’un espace sécurisé pour analyser des propriétés
            qui ne sont pas publiquement annoncées
          </p>
        </motion.div>
        <motion.div
          {...animations.fadeInFromDown}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3>Investors</h3>
          <h4>Investors</h4>
          <p>
            Recherchent une solution simple sous forme de calculatrice intégrée
            ainsi qu'un logiciel pour évaluer de manière rapide et précise la
            faisabilité des projets immobiliers..
          </p>
        </motion.div>
        <motion.div
          {...animations.fadeInFromDown}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3>Investors</h3>
          <h4>Investors</h4>
          <p>
            Aimeraient une plateforme en ligne pour suivre toutes leurs analyses
            facilement ainsi qu’un espace sécurisé pour analyser des propriétés
            qui ne sont pas publiquement annoncées
          </p>
        </motion.div>
        <motion.div
          {...animations.fadeInFromDown}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3>Investors</h3>
          <h4>Investors</h4>
          <p>
            Aimeraient une plateforme en ligne pour suivre toutes leurs analyses
            facilement ainsi qu’un espace sécurisé pour analyser des propriétés
            qui ne sont pas publiquement annoncées
          </p>
        </motion.div>
        <motion.div
          {...animations.fadeInFromDown}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3>Investors</h3>
          <h4>Investors</h4>
          <p>
            Recherchent une solution simple sous forme de calculatrice intégrée
            ainsi qu'un logiciel pour évaluer de manière rapide et précise la
            faisabilité des projets immobiliers..
          </p>
        </motion.div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 50px;
  background-color: var(--main);
  color: white;
  padding-top: 50px;

  h2,
  h3,
  h4 {
    color: white;
  }

  h2 {
    margin-bottom: 100px;
  }

  span {
    color: var(--green);
  }

  .wrapper {
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: space-around;
    height: 110%;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      margin-bottom: 40px;
      padding: 25px 20px;
      width: clamp(300px, 30%, 345px);
      height: 340px;
      background-color: var(--faded-grey);
      border-radius: 30px;
      box-shadow: 1px 5px 13.3px 0px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default Stats;
