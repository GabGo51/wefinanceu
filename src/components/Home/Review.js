import React, { useContext } from "react";
import styled from "styled-components";
import quote from "./img/quote.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bluewave2 from "./img/bluewave2.png";
import text from "./text/reviewText";
import { SettingContext } from "../../context/SettingContext";
import animations from "../animation";

//review section with a costumer review and contact us link
const Review = () => {
  const { lang } = useContext(SettingContext);

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Container>
      <img className="wave" alt="wavy" src={bluewave2} />
      <motion.div
       {...animations.fadeInFromUp}
        transition={{ duration: 1, delay: 0.1 }}
        className="wrapper"
      >
        <img src={quote} />
        <h2>{text.title[lang]}</h2>
        <p className="quote">{text.quote[lang]}</p>
        <div className="pic"></div>
        <p>
          <span>Brady Webb, CEO</span> American Mortgage Solutions Inc.
        </p>
        <div className="button-wrapper">
          <h4>{text.nav1[lang]} </h4>
          <div>
            <motion.button
              onClick={() => handleNavigate("/contact")}
              whileHover={{ paddingRight: 20 }}
              transition={{ duration: 0.3 }}
            >
              {text.nav2[lang]}
            </motion.button>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .wrapper {
    flex-direction: column;
  }

  .wave {
    margin-top: -2px;
    width: 100vw;
    margin-bottom: 40px;
  }

  p {
    width: 90%;
  }

  .quote {
    max-width: 1100px;
    font-size: clamp(24px, 3vw, 34px);
    line-height: 36px;
    margin: 0 40px;
  }

  .pic {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50px;
    margin: 50px 0;
  }

  span {
    font-weight: bold;
  }
  .button-wrapper {
    flex-direction: column;
    line-height: 34px;
  }
`;

export default Review;
