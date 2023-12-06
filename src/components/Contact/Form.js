import React from "react";
import styled from "styled-components";
const Form = () => {
  return (
    <Container>
      <form>
        <div>
          <label >Full Name</label>
          <input type="text"/>
        </div>
        <div>
          <label >Email</label>
          <input type="email"/>
        </div>
        <div>
          <label>Phone Number</label>
          <input type="phone"/>
        </div>
        <p>
          We’re committed to your privacy. WeFinanceU uses the information you
          provide to us to contact you about our relevant content, products, and
          services.
        </p>
        <button type="submit" className="login-button">Submit</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
display: flex;
justify-content: end;
align-items: end;

@media (max-width:950px){
    justify-content: center;
  }
form{
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  width: clamp(300px, 80% , 500px);

  div{
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    label{
      margin-bottom: 5px;
    }

    input{
      height: 30px;
      border-radius: 5px;
      border: 1px solid black;
      outline: none;
      width: 100%;

      &:focus{
        border: 1px solid blue;
      }
    }

  }

  

  p{
    width: 90%;
    font-size: 10px;
    font-style: italic;
  }

  button{
    margin-top: 20px;
  }
}
`;

export default Form;
