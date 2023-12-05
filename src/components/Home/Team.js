import React from 'react'
import styled from 'styled-components'
import team from './img/team.png'
import { useNavigate } from "react-router-dom";
const Team = () => {

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      
    });
  };
  return (
    <Container>
      
        <img alt='team members' src={team}/>
        <div className='wrapper'>
          
            <h2>Meet</h2>
            <button onClick={() => handleNavigate("/team")}>our Team</button>

          
        </div>
      
    </Container>
  )
}

const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
h2{
  margin: 0;
  font-weight: 400;
  margin-right: 15px;
}
img{
  width: 100vw;
  max-height: 500px;
  min-height: 300px;
  object-fit: cover;
}

.wrapper{
  margin-top: -100px;
  margin-bottom: 100px;
  justify-content: start;
  padding: 20px;

  button{
    all: unset;
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 600;
    cursor: pointer;
  }
}




`

export default Team