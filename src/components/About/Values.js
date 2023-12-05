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
        <div classname="value">
          <img alt="icon" className="icon" src={client} />
          <div></div>
          <h3>Client Oriented</h3>
          <p>
            {" "}
            Le client est au cœur de notre mission. Grâce à nos solutions
            personnalisées et notre service client d'exception, nous rendons le
            secteur du financement immobilier commercial accessible à tous,
            indépendamment de leur niveau d'expérience ou de leur origine.
          </p>
        </div>
        <div classname="value">
          <img alt="icon" className="icon" src={integrity} />
          <div></div>
          <h3>Integrity</h3>
          <p>
            {" "}
            Nous instaurons la confiance en agissant toujours de manière
            honnête, transparente et éthique. Nous nous engageons à fournir des
            informations fiables et faciles à comprendre pour aider nos clients
            à prendre des décisions éclairées.
          </p>
        </div>
        <div classname="value">
          <img alt="icon" className="icon" src={agile} />
          <div></div>
          <h3>Agility</h3>
          <p>
            {" "}
            Nous restons continuellement à l'avant-garde des changements et
            innovations dans le secteur du financement immobilier commercial.
            WeFinanceU offre une alternative aux processus de financement
            archaïques établis depuis des décennies.
          </p>
        </div>
        <div classname="value">
          <img alt="icon" className="icon" src={collaborate} />
          <div></div>
          <h3>Collaboration</h3>
          <p>
            La collaboration est essentielle dans notre démarche. Qu’il s’agisse
            de cerner les besoins spécifiques de nos clients ou de nouer des
            partenariats stratégiques avec des acteurs clés tels que Centris,
            CORPIQ, ainsi que diverses plateformes et institutions bancaires de
            courtage, notre objectif est de créer des relations durables et
            bénéfiques pour toutes les parties.
          </p>
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

  .wrapper {
    flex-wrap: wrap;
    align-items: start;
    gap: 20px;
    div{
      width: 45%;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div{
        width: 90px;
    height: 90px;
    margin-top: -75px;
    
    background-color: var(--light-color);
    border-radius: 50%;
    margin-bottom: 20px;
      }
    }

    @media (max-width:900px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div{
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
          margin-left: -3px;
        }
      }
    }
  }
  

  .icon {
    display: block;
    width: 60px;
    margin: 0;
    z-index: 90;
  }
  
`;

export default Values;
