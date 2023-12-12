import React from "react";
import styled from "styled-components";
import quote from "./img/quote.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Review = () => {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Container>
      <img src={quote} />
      <h2>What our customers are saying</h2>
      <p className="quote">
        After 25 years I've finally found the CRM that has helped me reduce cost
        and increase revenue.
      </p>

      <div className="pic"></div>
      <p>
        <span>Brady Webb, CEO</span> American Mortgage Solutions Inc.
      </p>
      <div className="button-wrapper">
        <h4>Want to tell us something ? </h4>
        <div>
          <motion.button
            onClick={() => handleNavigate("/contact")}
            whileHover={{ paddingRight: 20 }}
            transition={{ duration: 0.3 }}
          >
            Contact us
          </motion.button>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  text-align: center;
  p{
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
  }
`;

export default Review;
