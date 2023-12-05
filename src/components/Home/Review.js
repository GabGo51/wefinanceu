import React from "react";
import styled from "styled-components";
import star from "./img/star.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Review = () => {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <h2>What our customers are saying</h2>
      <div className="wrapper">
        <div className="review">
          <img src={star} />
          <h3>No more waiting to get a quote!</h3>
          <div></div>
          <p>
            WeFinanceU saves me so much time. I originally had to wait weeks and
            talk to at least 3 different person before knowing. The app did all
            the calculation and gave me a price range in less than 10 minutes!
          </p>
          <h4>Gabriel Gosselin</h4>
        </div>
        <div className="review">
          <img src={star} />
          <h3>No more waiting to get a quote!</h3>
          <div></div>
          <p>
            WeFinanceU saves me so much time. I originally had to wait weeks and
            talk to at least 3 different person before knowing. The app did all
            the calculation and gave me a price range in less than 10 minutes!
          </p>
          <h4>Gabriel Gosselin</h4>
        </div>
        <div className="review">
          <img src={star} />
          <h3>No more waiting to get a quote!</h3>
          <div></div>
          <p>
            WeFinanceU saves me so much time. I originally had to wait weeks and
            talk to at least 3 different person before knowing. The app did all
            the calculation and gave me a price range in less than 10 minutes!
          </p>
          <h4>Gabriel Gosselin</h4>
        </div>
      </div>
      <div className="button-wrapper">
        <h4>Want to tell us something ? </h4>
        <motion.button
          onClick={() => handleNavigate("/contact")}
          whileHover={{ paddingRight: 20 }}
          transition={{ duration: 0.3 }}
        >
          Contact us
        </motion.button>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 20px;
    margin: 10px 0;
  }

  p {
    margin-bottom: 40px;
  }

  img {
    width: 150px;
    transform: translateX(-8%);
  }

  .wrapper {
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-around;
    margin-bottom: 40px;
  }

  .review {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin: 20px;
    width: clamp(300px, 30%, 420px);

    div {
      height: 1px;
      width: 100%;
      background-color: grey;
      margin: 20px 0;
      margin-bottom: 40px;
      opacity: 0.7;
    }
  }
`;

export default Review;
