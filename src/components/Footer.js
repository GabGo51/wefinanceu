import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import whiteLogo from '../img/whiteLogo.PNG'
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <div className="wrapper">
        <div>
          <img onClick={() => handleNavigate("/")} src={whiteLogo}/>
        <ul className="contact-ul">
          <li>450-712-7842</li>
          <li>WeFinanceU@gmail.com</li>
        </ul>
        </div>
        
        <ul>
          <li onClick={() => handleNavigate("/about")}>About</li>
          <li onClick={() => handleNavigate("/product")}>Product</li>
          <li onClick={() => handleNavigate("/team")}>Team</li>
          <li onClick={() => handleNavigate("/contact")}>Contact Us</li>
        </ul>
      </div>
      <div className="powered">
        <p>© {currentYear} WeFinanceU</p> <>|</> <p>All rights reserved</p>
      </div>
      <button onClick={() => handleNavigate("/poweredby")}>powered by</button>
    </Container>
  );
};
const Container = styled.footer`
  padding: 20px 0;
  background-color: #015d85;
  width: 100vw;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  

  .wrapper {
    img{
      width:clamp(150px ,20% ,250px);
      cursor: pointer;
      margin-bottom: 20px;

      
    }
    ul{
      li{
        cursor: pointer;
        transition: 300ms;
        text-align: end;
        margin: 20px 0;
        width: 100px;
        &:hover{
          transform: translateX(5%);
        }
      }
    }
    .contact-ul{
      li{
        text-align: start;
        margin:  10px 0;
        transition: 500ms;
        width: 200px;

        
      }
      
    }
  }

  .powered {
    opacity: 0.7;
    padding: 20px 0px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    border-top: 1px solid #e9e9e9;
    width: clamp(300px, 95%, 1400px);
    font-size: 12px;
    p {
      margin: 0 30px;
    }
  }

  button{
    all: unset;
    opacity: 0.4;
    font-size: 12px;
    cursor: pointer;
  }
`;

export default Footer;
