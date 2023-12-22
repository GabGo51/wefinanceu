import React, { useContext } from "react";
import styled from "styled-components";
import bluewave from './img/bluewave.png'
import text from './text/partnerText'
import { SettingContext } from "../../context/SettingContext";
const Partner = () => {

   const {lang} = useContext(SettingContext)
  return (
    <Container>
      <img src={bluewave} alt="wave" className="wave"/>
      <div className="wrapper">
        <h2>{text.title[lang]}</h2>
        <div className="compagnies">
          <h1>Company 1</h1>
          <h1>Company 2</h1>
          <h1>Company 3</h1>
          <h1>Company 4</h1>

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
  .wave{
    width: 100vw;
    margin-top: -2px;
  }

  .wrapper{
    flex-direction: column;
    align-items: start;
  }

  .compagnies{
    display: flex;
    flex-wrap: wrap;
    h1{
      margin-right: 50px;
      color: grey;
      opacity: 0.8;
    }
  }
`;

export default Partner;
