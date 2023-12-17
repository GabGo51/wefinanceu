import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Stats = () => {
  return (
    <Container>
      <h2>A look on our <span>past succes</span> </h2>
      <div className="wrapper">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
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
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
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
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
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
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
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
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
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
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
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

h2 , h3 ,h4{
  color: white;
}

h2{
  margin-bottom: 100px;
}

span{
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
      box-shadow: 1px 5px 13.3px 0px rgba(0, 0, 0, 0.10);
    }
  }

`;

export default Stats;
