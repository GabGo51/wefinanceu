import React from 'react'
import styled from 'styled-components'

const Stats = () => {
  return (
    <Container>
      <h2>WeFinance in Number</h2>
      <div className='wrapper'>
        <div>
          <h3>100+</h3>
          <p>Lenders</p>
        </div>
        <div>
          <h3>400M+</h3>
          <p>Funded</p>
        </div>
        <div>
          <h3>25+</h3>
          <p>Years of Experience</p>
        </div>
        <div>
          <h3>15+</h3>
          <p>Market Covered</p>
        </div>
      </div>


    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h2{
  margin: 50px 0;
}

.wrapper{
  div{
    margin: 40px 0;
  }
  h3{
    color: #015d85;
  }
}

@media (max-width:900px){
  h2{
    text-align: center;
  }
  .wrapper{
    flex-wrap: wrap;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;

      p{
        text-align: center;
      }
    }
  }
}
`

export default Stats