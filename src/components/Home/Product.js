import React from "react";
import styled from "styled-components";
import formulaire from "./img/formulaire.PNG";
import fourchette from "./img/fourchette.PNG";
import tableau from "./img/tableau.PNG";
import form from "./img/contact.png";
import dollar from "./img/dollar.png";
import monitor from "./img/monitor.png";
import { motion } from "framer-motion";

const Product = () => {
  return (
    <Container>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Simplify the process and save time on your projects
      </motion.h2>

      <div className="wrapper">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img className="icon" src={form} />
          <h3>Online Form</h3>
          <p>
            {" "}
            some text about how to go about the about form and what it do for ur
            business
          </p>
          <img src={formulaire} />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <img className="icon" src={dollar} />
          <h3>Price Range</h3>
          <p>
            {" "}
            some text about how to go about the about form and what it do for ur
            business
          </p>
          <img src={fourchette} />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <img className="icon" src={monitor} />
          <h3>Dashboard</h3>
          <p>
            some text about how to go about the about form and what it do for ur
            business
          </p>
          <img src={tableau} />
        </motion.div>
      </div>
      <div className="wrapper"></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    margin: 50px 50px;
    max-width: 550px;
  }

  .wrapper {
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-around;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 20px;
      width: clamp(300px, 30%, 420px);
    }
    img {
      margin: 40px;
      width: clamp(300px, 30%, 470px);
    }

    .icon {
      width: 40px;
      margin: 0;
    }
  }
`;

export default Product;
