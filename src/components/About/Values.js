import React from "react";
import styled from "styled-components";
import agility from "./img/agility.png";
import collab from "./img/collab.png";
import integrity from "./img/integrity.png";
import client from "./img/client.png";
import { motion } from "framer-motion";

const Values = () => {
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
          What drives us
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
          <h3>Client Oriented</h3>
          <p>
            {" "}
            Le client est au cœur de notre mission. Grâce à nos solutions
            personnalisées et notre service client d'exception, nous rendons le
            secteur du financement immobilier commercial accessible à tous,
            indépendamment de leur niveau d'expérience ou de leur origine.
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
          <h3>Integrity</h3>
          <p>
            {" "}
            Nous instaurons la confiance en agissant toujours de manière
            honnête, transparente et éthique. Nous nous engageons à fournir des
            informations fiables et faciles à comprendre pour aider nos clients
            à prendre des décisions éclairées.
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
          <h3>Agility</h3>
          <p>
            {" "}
            Nous restons continuellement à l'avant-garde des changements et
            innovations dans le secteur du financement immobilier commercial.
            WeFinanceU offre une alternative aux processus de financement
            archaïques établis depuis des décennies.
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
          <h3>Collaboration</h3>
          <p>
            La collaboration est essentielle dans notre démarche. Qu’il s’agisse
            de cerner les besoins spécifiques de nos clients ou de nouer des
            partenariats stratégiques avec des acteurs clés tels que Centris,
            CORPIQ, ainsi que diverses plateformes et institutions bancaires de
            courtage, notre objectif est de créer des relations durables et
            bénéfiques pour toutes les parties.
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

  h2 {
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
