import React from "react";
import styled from "styled-components";
import office1 from "./img/office1.PNG";
import office2 from "./img/office2.PNG";
const Intro = () => {
  return (
    <Container>
      <div className="color-box">
        <div className="wrapper">
          <div>
            <h2>Our Mission</h2>
            <p>
              WeFinanceU se consacre à démocratiser l'accès au financement
              immobilier commercial pour tous, que cela soit des débutants ou
              des experts dans le secteur.
            </p>
            <p>
              Nous éliminons les obstacles habituels, tels que les échanges de
              courriels interminables, les appels répétés, les réunions
              téléphoniques ou en personne et l'attente de documents, grâce à
              notre plateforme intuitive d'analyse de prêts commerciaux.{" "}
            </p>
            <p>
              {" "}
              De cette manière, chaque utilisateur est habilité à obtenir
              rapidement les informations clés nécessaires pour des décisions
              financières éclairées.
            </p>
          </div>

          <img src={office1} />
        </div>
      </div>

      <div className="wrapper">
        <img src={office2} />
        <div className="text-box">
          <h2>Our Vision</h2>
          <p>
              WeFinanceU se consacre à démocratiser l'accès au financement
              immobilier commercial pour tous, que cela soit des débutants ou
              des experts dans le secteur.
            </p>
            <p>
              Nous éliminons les obstacles habituels, tels que les échanges de
              courriels interminables, les appels répétés, les réunions
              téléphoniques ou en personne et l'attente de documents, grâce à
              notre plateforme intuitive d'analyse de prêts commerciaux.{" "}
            </p>
            <p>
              {" "}
              De cette manière, chaque utilisateur est habilité à obtenir
              rapidement les informations clés nécessaires pour des décisions
              financières éclairées.
            </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: clamp(500px, 50%, 700px);
    object-fit: cover;
  }

  h2 {
    color: #015d85;
    margin: 0;
  }

  p {
    margin: 20px 0;
    font-size: clamp(14px ,30%, 16px);
  }

  .color-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #95cfe8;
  }

  .wrapper {
    padding: 50px 0;
    div {
      margin-right: 40px;
    }

    @media (max-width:1200px){
      flex-direction: column-reverse;
      
      img{
        width: 100%;
        height: clamp( 200px,20%, 400px);
        margin: 10px;
      }

      

      .text-box{
        margin: 0;
      }
    }
  }

  .text-box {
    margin-right: 0;
    margin-left: 40px;
  }
`;

export default Intro;
