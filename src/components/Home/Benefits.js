import React from 'react'
import wave from './img/productwave.png'
import styled from 'styled-components'


const Benefits = () => {
  return (
    <Container>
      <img className='wave' src={wave}/>
      <h2>Save time & money with one complete solution.</h2>
      <div className='wrapper'>
        <Text>

        </Text>
        <Img>

        </Img>
      </div>
    </Container>
  )
}

const Container = styled.div`
position: relative;
padding-top: 300px;
display: flex;
flex-direction: column;
  align-items: center;
  justify-content: center;

.wave{
  position: absolute;
  top: 0;
  width: 100vw;
}
`

const Text = styled.div`

`

const Img = styled.div`

`
export default Benefits