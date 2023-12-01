import React from "react";
import styled from "styled-components";

const Partner = () => {
  return (
    <Container>
      <div className="wrapper">
        <h2>With the supports of our partners</h2>
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
  padding: 50px 0;

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
