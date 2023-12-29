import React, { useContext } from "react";
import wave from "./img/productwave.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import text from './text/benefitsText'
import { SettingContext } from "../../context/SettingContext";

//benefit component under product component: 4 block of text and an image\link
const Benefits = () => {

  const {lang} = useContext(SettingContext)

  return (
    <Container>
      <img className="wave" src={wave} />
      <h2>{text.title[lang]}</h2>
      <div className="wrapper">
        <Text>
          <div>
            <h3>{text.sub1[lang]}</h3>
            <p>
            {text.p1[lang]}
            </p>
          </div>
          <div>
            <h3>{text.sub2[lang]}</h3>
            <p>
            {text.p2[lang]}
            </p>
          </div>
          <div>
            <h3>{text.sub3[lang]}</h3>
            <p>
            {text.p3[lang]}
            </p>
          </div>
          <div>
            <h3>{text.sub4[lang]}</h3>
            <p>
            {text.p4[lang]}
            </p>
          </div>
        </Text>
        <Img>
          <div></div>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="try-button"
          >
           {text.button[lang]}
          </motion.button>
        </Img>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;

  h2{
    color: var(--main);
    margin-bottom: 80px;
    text-align: center;
    margin: 40px 20px;
  }

  .wave {
    position: absolute;
    top: 0;
    width: 100vw;
  }

  .wrapper{
    @media (max-width:1350px){
      flex-direction: column;
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:start;
  gap: 20px;
  
  h3{
    color: var(--main);
  }

  p{
    color: var(--main-p);
  }

  div {
    width: clamp(270px, 50%, 320px); /* Adjust the width as needed */
    margin-bottom: 10px; /* Add margin between items */
    box-sizing: border-box;   
    padding: 10px;
  }
`;

const Img = styled.div`
  position: relative;
  
  div {
    background-color: grey;
    width: 400px;
    height: 600px;
    border-radius: 40px;
  }

  button{
    position: absolute;
    bottom: 30px;
    right: 120px;
  }
`;
export default Benefits;
