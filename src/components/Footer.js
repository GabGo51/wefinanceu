import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import logo from "../img/logopng.png";
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };
  const currentYear = new Date().getFullYear();
  return (
    <Container
      initial={{ scaleY: 0.6, backgroundColor: "white" }}
      whileInView={{ scaleY: 1, backgroundColor: "var(--main)" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="wrapper">
        <div>
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            alt="logo"
            className="noselect"
            onClick={() => handleNavigate("/")}
            src={logo}
          />
          <ul className="contact-ul noselect">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              onClick={() => handleNavigate("/about")}
            >
              <li>450-712-7842</li>
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={() => handleNavigate("/about")}
            >
              <li>WeFinanceU@gmail.com</li>
            </motion.div>
          </ul>
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="try-button"
          >
            Try it free
          </motion.button>
          
        </div>

        <ul className="noselect">
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            onClick={() => handleNavigate("/product")}
          >
            <li>Our Solution</li>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => handleNavigate("/about")}
          >
            <li>About Us</li>
          </motion.div>
          
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            onClick={() => handleNavigate("/contact")}
          >
            <li>Contact Us</li>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            onClick={() => handleNavigate("/contact")}
          >
            <li>Login</li>
          </motion.div>
        </ul>
      </div>
      <motion.div
        className="line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      ></motion.div>
      <div className="powered">
        <p>© {currentYear} WeFinanceU</p> <>|</> <p>All rights reserved</p>
      </div>
      <button
        className="powered-button"
        
      >
        powered by
      </button>
    </Container>
  );
};
const Container = styled(motion.footer)`
  transform-origin: bottom;
  padding: 20px 0;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .wrapper {
    img {
      width: clamp(150px, 20%, 250px);
      cursor: pointer;
    }
    ul {
      li {
        cursor: pointer;
        transition: 300ms;
        text-align: end;
        margin: 20px 0;
        width: 120px;
        &:hover {
          transform: translateX(5%);
        }
      }
    }
    .contact-ul {
      li {
        text-align: start;
        margin: 10px 0;
        transition: 500ms;
        width: 200px;
      }
    }
  }
  .login-button {
    border: 2px solid white;
    color: white;

    &:hover {
      background-color: white;
      color: var(--main);
    }
  }

  .line {
    border-top: 1px solid #e9e9e9;
    opacity: 0.6;
    width: clamp(300px, 95%, 1400px);
    margin-top: 15px;
    transform-origin: left;
  }

  .powered {
    opacity: 0.7;
    padding: 20px 0px;
    margin-top: 20px;
    display: flex;
    justify-content: center;

    width: clamp(300px, 95%, 1400px);
    font-size: 12px;
    p {
      margin: 0 30px;
    }
  }

  .powered-button {
    all: unset;
    opacity: 0.4;
    font-size: 12px;
    cursor: pointer;
  }

  .try-button{
    margin-top: 20px;
  }
`;

export default Footer;
