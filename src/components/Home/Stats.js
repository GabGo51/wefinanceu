import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Stats = () => {
  const initial = {
    opacity: 0,
    y: 50,
  };

  const animate = {
    opacity: 1,
    y: 0,
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      
    });
  };

  return (
    <Container
     //using scale makes it go bottom to top 
     //height:top-bottom scale:bottom-top
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={initial}
        whileInView={animate}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        WeFinanceU in numbers
      </motion.h2>
      <div className="wrapper">
        <motion.div
          initial={initial}
          whileInView={animate}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>100+</h3>
          <p>Lenders</p>
        </motion.div>
        <motion.div
          initial={initial}
          whileInView={animate}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>400M+</h3>
          <p>Funded</p>
        </motion.div>
        <motion.div
          initial={initial}
          whileInView={animate}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>25+</h3>
          <p>Years of Experience</p>
        </motion.div>
        <motion.div
          initial={initial}
          whileInView={animate}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <h3>15+</h3>
          <p>Market Covered</p>
        </motion.div>
      </div>
      <motion.div initial={initial}
        whileInView={animate} transition={{duration:0.3, delay:0.2}} className="button-wrapper">
        <h4>Learn more</h4>
        <motion.button
        
        
          onClick={() => handleNavigate("/about")}
          whileHover={{ paddingRight: 20 }}
          transition={{ duration: 0.3 }}
        >
          about us
        </motion.button>
        <i class="fa-solid fa-arrow-right"></i>
      </motion.div>
    </Container>
  );
};

const Container = styled(motion.div)`
  transform-origin: revert;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  padding-top: 10px;
  background-color: var(--grey-color);
  .wrapper {
    div {
      margin: 40px 0;
    }
    h3 {
      color: #015d85;
    }
  }

  @media (max-width: 950px) {
    h2 {
      text-align: center;
      margin: 20px 0;
    }
    .wrapper {
      flex-wrap: wrap;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;

        p {
          text-align: center;
        }
      }
    }
  }
`;

export default Stats;
