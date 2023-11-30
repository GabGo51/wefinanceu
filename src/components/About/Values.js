import React from "react";
import styled from "styled-components";
import client from "./img/client.png";
import integrity from "./img/integrity.png";
import agile from "./img/agile.png";
import collaborate from "./img/collaborate.png";
const Values = () => {
  return (
    <Container>
      <h2>What drives us</h2>
      <div className="wrapper">
        <div>
          <img className="icon" src={client} />
          <div className="dot"></div>
          <h3>Client Oriented</h3>
          <p></p>
        </div>
        <div>
          <img className="icon" src={integrity} />
          <div className="dot"></div>
          <h3>Integrity</h3>
          <p></p>
        </div>
        <div>
          <img className="icon" src={agile} />
          <div className="dot"></div>
          <h3>Agility</h3>
          <p></p>
        </div>
        <div>
          <img className="icon" src={collaborate} />
          <div className="dot"></div>
          <h3>Collaboration</h3>
          <p></p>
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

  .icon {
    display: block;
    width: 60px;
    margin: 0;
    z-index: 100;
  }
  .dot {
    width: 90px;
    height: 90px;
   margin-top: -75px;
   margin-left: -16px;
    background-color: #95cfe8;
    border-radius: 50%;
    margin-bottom: 20px;
    
  }
`;

export default Values;
