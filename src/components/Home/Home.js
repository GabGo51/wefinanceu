import React from 'react'
import styled from 'styled-components'
import screen from './img/screen.PNG'
const Home = () => {
  return (
    <Container>
      <div className='wrapper'>
          <div className='text-box'>
            <h1>A simple plateforme, solution for all your problemes</h1>
            <p>ahjfljabvlabvlablvabglbalgblagbl ajvfkahjf asfgahgfl b agflahjbflablfablzn v.z,nm gzkjgjkhzgjkhz </p>
            <button className="login-button">
                  <p>Login</p>
                  <p className="arrow">⟶</p>
                </button>
          </div>
          
          <img src={screen}/>

      </div>

    </Container>
  )
}

const Container = styled.div`
padding-top: 50px;
padding-bottom: 1000px;
display: flex;
align-items: center;
justify-content: center;
.wrapper{
  .text-box{
    display: flex;
    flex-direction: column;
    margin-right: 50px;

    h1{
      margin-bottom: 40px;
      font-size: clamp(24px, 3vw, 40px);
    }

    p{
      
    }

    button{
      margin: 40px 0;
    }
  }

  img{
  border-radius: 30px;
  width:clamp(300px, 50%, 600px) ;
}

@media (max-width:900px){
  flex-direction: column;
  .text-box{
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0;
    max-width: 500px;
  }
}
}

`
export default Home