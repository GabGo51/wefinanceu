import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import text from "./text";
import logo from "../img/logopng.png";
import { SettingContext } from "../context/SettingContext";
import animations from "./animation";

// footer component with nav buttons and contact info
const Footer = () => {
  const { lang } = useContext(SettingContext);

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
      initial={{ scaleY: 0.8, backgroundColor: "white" }}
      whileInView={{ scaleY: 1, backgroundColor: "var(--main)" }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="wrapper">
        <div>
          <motion.img
            {...animations.fadeInFromLeft}
            transition={{ duration: 0.5, delay: 0.2 }}
            alt="logo"
            className="noselect"
            onClick={() => handleNavigate("/")}
            src={logo}
          />
          <ul className="contact-ul noselect">
            <motion.div
              {...animations.fadeInFromLeft}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => handleNavigate("/about")}
            >
              <li>450-712-7842</li>
            </motion.div>
            <motion.div
              {...animations.fadeInFromLeft}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => handleNavigate("/about")}
            >
              <li>WeFinanceU@gmail.com</li>
            </motion.div>
          </ul>
          <motion.button
            {...animations.fadeInFromLeft}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="try-button"
          >
            {text.tryButton[lang]}
          </motion.button>
        </div>
        <ul className="noselect">
          <motion.div
            {...animations.fadeInFromRight}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => handleNavigate("/product")}
          >
            <li>{text.solution[lang]}</li>
          </motion.div>
          <motion.div
            {...animations.fadeInFromRight}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => handleNavigate("/about")}
          >
            <li>{text.about[lang]}</li>
          </motion.div>
          <motion.div
            {...animations.fadeInFromRight}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => handleNavigate("/contact")}
          >
            <li>{text.contact[lang]}</li>
          </motion.div>
          <motion.div
            {...animations.fadeInFromRight}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => handleNavigate("/contact")}
          >
            <li>{text.login[lang]}</li>
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
        <p>© {currentYear} WeFinanceU</p> <>|</> <p>{text.rights[lang]}</p>
      </div>
      <button className="powered-button">{text.powered[lang]}</button>
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

  p {
    font-size: 12px;
  }

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

  .try-button {
    margin-top: 20px;
  }
`;

export default Footer;
