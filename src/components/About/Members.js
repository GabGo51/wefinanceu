import React, { useContext } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import alexis from "./img/alexis.PNG";
import sabrina from "./img/sabrina.PNG";
import greywave from './img/greywave.png'
import text from './text/membersText'
import { SettingContext } from "../../context/SettingContext";
const Members = () => {

  const {lang} = useContext(SettingContext)
  return (
    <Container>
      <h1>{text.title[lang]}</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      
        <div className="wrapper">
          <div>
            <motion.img
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            src={alexis}
            
          />
          <h3>Alexis Aube-Martin </h3>
          <p>Title </p>
          </div>
          <div>
            <motion.img
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={sabrina}
          />
          <h3>Sabrina Lateigne</h3>
          <p>Title</p>
          </div>
          
        </div>
      
      <img src={greywave} alt="wave" className="wave"/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--main);
  color: white;
  text-align: center;
  
  
  .wave{
    width: 100vw;
    margin-bottom: -2px;
    border-radius: 0;
  }

  h1{
    color: white;
    margin-top: 80px;
  }

  

  h2 {
    color: #015d85;
    margin: 0;
    
  }
  

  p {
    margin: 20px 0;
    font-size: clamp(14px, 30%, 16px);
    max-width: 600px;
    margin: 20px;
    margin-bottom: -50px;
    
    
  }

  

  .wrapper {
    align-items: start;
    justify-content: center;
    justify-content: space-around;
    transform: translateY(35%);
    div{
      width: clamp(150px, 35%, 300px);
      
    }

    img {
    width: 100%;
    object-fit: cover;
    margin: 5px;
    border-radius: 30px;
  }
  h3{
    margin: 10px 0;
    font-size: clamp(14px, 3vw, 20px);
  }

    p{
      color: var(--main);
      margin: 0;
    }
    
    @media (max-width:700px){
      transform: translateY(40%);
    }
  }

  
`;

export default Members;
