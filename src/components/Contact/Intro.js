import React, { useContext } from "react";
import styled from "styled-components";
import text from './text/introText'
import { SettingContext } from "../../context/SettingContext";

const Intro = () => {

  const {lang} = useContext(SettingContext)
  return (
    <Container>
      <h1>{text.title[lang]}</h1>
      <p>
        Ready to revolutionize your sales process? We’d love to show you what
        Pipedrive can do – contact our sales experts and discover how Pipedrive
        can help improve your team's performance. Simply fill out the form to
        the right, and a member of our team will contact you as soon as
        possible.
      </p>
      <div>
      <i className="fa-solid fa-check"></i>
      <p> Get advice from a sales expert who will understand your business needs</p>
      </div>
      <div>
      <i className="fa-solid fa-check"></i>
      <p> Understand how to best use WeFinanceU</p>
      </div>
      <div>
      <i className="fa-solid fa-check"></i>
      <p> Learn more about how to scale your business</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
width: 65%;
color: white;

h1{
  margin-bottom: 40px;
  color: white;
}

div{
  display: flex;
  margin: 20px 0;

  i{
    margin-right: 20px;
    color: var(--green);
  }
}
@media (max-width:950px){
    width: 100%;
  }
`;

export default Intro;
