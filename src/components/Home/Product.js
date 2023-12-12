import React from "react";
import styled from "styled-components";
import survey from './img/survey.png'
import chart from './img/chart.png'
import dash from './img/dash.png'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";




const Product = () => {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Container>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        How WeFinanceU Works
      </motion.h2>

      <div className="wrapper">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img alt="icon" src={survey}/>
          <h3>1. Take a short survey</h3>
          <p>
          Disponible 24/7 sur mobile et web, notre plateforme offre une analyse détaillée des options de financemente
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <img alt="icon" src={chart}/>
          <h3>2. Get an accurate finance range</h3>
          <p>
          Obtebez une fourchette de prêts actualisée selon les taux et programmes du marché adaptés à tous types de propriétés.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <img alt="icon" src={dash}/>
          <h3>3. Review your submissions on dashboard </h3>
          <p>
          Tableau de bord intégré pour la gestion de vos projets etc.
          </p>
        </motion.div>
      </div>
      <div className="button-wrapper">
        <h4>See our</h4>
        <motion.button
          onClick={() => handleNavigate("/product")}
          whileHover={{ paddingRight: 20 }}
          transition={{ duration: 0.3 }}
        >
           product
        </motion.button>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      
    </Container>
  );
};

const Container = styled.div`
position: relative;
  background-color: var(--secondary);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;

  h2 {
    text-align: center;
    margin: 50px 50px;
    max-width: 550px;
  }

  h2,
  h3 {
    color: var(--main);
  }

  .wrapper {
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
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
      background-color: white;
      border-radius: 30px;
      box-shadow: 1px 5px 13.3px 0px rgba(0, 0, 0, 0.10);
    }

    p{
      color: var(--main-p);
    }
    

    
  }

  
`;

export default Product;
