import React from "react";
import styled from "styled-components";

const Stats = () => {
  return (
    <Container>
      <h2>A look on our past succes</h2>
      <div className="wrapper">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>

      </div>
    </Container>
  );
};

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-bottom: 100px;

.wrapper{
  gap: 20px;
  flex-wrap: wrap;
}
.card{
  background-color: var(--light-color);
  border-radius: 20px;
  height: 300px;
  width: 22%;

  @media (max-width:1350px){
    width: 30%;
  }
}
`;

export default Stats;
