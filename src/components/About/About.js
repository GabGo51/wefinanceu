import React from 'react'
import styled from 'styled-components'
import Intro from './Intro'
import Stats from './Stats'
import Partner from './Partner'
import Values from './Values'

const About = () => {
  return (
    <Container>
      <Intro/>
      <Values/>
      <Stats/>
      <Partner/>
    </Container>
  )
}

const Container = styled.div`

`

export default About