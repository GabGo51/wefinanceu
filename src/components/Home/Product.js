import React, { useContext } from "react";
import styled from "styled-components";
import survey from "./img/survey.png";
import chart from "./img/chart.png";
import dash from "./img/dash.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import text from "./text/productText";
import { SettingContext } from "../../context/SettingContext";
import animations from "../animation";
// component explaining the app and  linking to produact page
const Product = () => {
  const { lang } = useContext(SettingContext);

  //navigation to product page and scroll top
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
        {...animations.fadeInFromDown}
        transition={{ duration: 1, delay: 0 }}
      >
        {text.productTitle[lang]}
      </motion.h2>
      <div className="wrapper">
        <motion.div
          {...animations.fadeInFromDown}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img alt="icon" src={survey} />
          <h3>{text.subtitle1[lang]}</h3>
          <p>{text.p1[lang]}</p>
        </motion.div>
        <motion.div
          {...animations.fadeInFromDown}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img alt="icon" src={chart} />
          <h3>{text.subtitle2[lang]}</h3>
          <p>{text.p1[lang]} </p>
        </motion.div>
        <motion.div
          {...animations.fadeInFromDown}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img alt="icon" src={dash} />
          <h3>{text.subtitle3[lang]}</h3>
          <p>{text.p3[lang]}</p>
        </motion.div>
      </div>
      <motion.div
        className="button-wrapper"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h4>{text.nav1[lang]}</h4>
        <motion.button
          onClick={() => handleNavigate("/product")}
          whileHover={{ paddingRight: 20 }}
        >
          {text.nav2[lang]}
        </motion.button>
        <i class="fa-solid fa-arrow-right"></i>
      </motion.div>
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

  .wave {
    margin-top: -2px;
    width: 100vw;
  }

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
      box-shadow: 1px 5px 13.3px 0px rgba(0, 0, 0, 0.1);
    }

    p {
      color: var(--main-p);
    }
  }
`;

export default Product;
