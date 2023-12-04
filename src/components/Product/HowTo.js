import React from "react";
import styled from "styled-components";
import account from "./img/account.PNG";
const HowTo = () => {
  return (
    <Container>
      <h2>How WeFinanceU works</h2>
      <div className="wrapper">
        <div>
          <div className="title">
            <div>1</div>
            <h3>Create an account</h3>
          </div>
          <p>
            WeFinanceU se consacre à démocratiser l'accès au financement
            immobilier commercial pour tous, que cela soit des débutants ou des
            experts dans le secteur.
          </p>
        </div>

        <img src={account} />
      </div>
      <div className="wrapper reverse">
        <div>
        <div className="title">
            <div>3</div>
            <h3>Create an account</h3>
          </div>
          <p>
            WeFinanceU se consacre à démocratiser l'accès au financement
            immobilier commercial pour tous, que cela soit des débutants ou des
            experts dans le secteur.
          </p>
        </div>

        <img src={account} />
      </div>
      <div className="wrapper">
        <div>
        <div className="title">
            <div>3</div>
            <h3>Create an account</h3>
          </div>
          <p>
            WeFinanceU se consacre à démocratiser l'accès au financement
            immobilier commercial pour tous, que cela soit des débutants ou des
            experts dans le secteur.
          </p>
        </div>

        <img src={account} />
      </div>
      <div className="wrapper reverse">
        <div>
        <div className="title">
            <div>4</div>
            <h3>Create an account</h3>
          </div>
          <p>
            WeFinanceU se consacre à démocratiser l'accès au financement
            immobilier commercial pour tous, que cela soit des débutants ou des
            experts dans le secteur.
          </p>
        </div>

        <img src={account} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;



  img{
    width: clamp(250px, 40%, 400px);
  }

  .wrapper{
    gap: 40px;
    margin: 40px 0;

    .title{
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      div{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        font-weight: 600;
        background-color:#95cfe8;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    @media (max-width:950px){
      flex-direction: column;
    }
  }

  .reverse{
    flex-direction: row-reverse;
    @media (max-width:950px){
      flex-direction: column;
    }
  }
`;

export default HowTo;
