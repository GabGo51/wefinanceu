import React from 'react'
import styled from 'styled-components'
import Intro from './Intro'
import Stats from './Stats'
import Partner from './Partner'


const About = () => {
  return (
    <Container>
      <Intro/>
      <Stats/>
      <Partner/>
    </Container>
  )
}

const Container = styled.div`

`

export default About