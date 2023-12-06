import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import Text from './Text'
const Contact = () => {
  return (
    <Container><div className='wrapper'><Text/><Form/></div></Container>
  )
}
const Container = styled.div`
padding-top: 50px;
display: flex;
align-items: center;
justify-content: center;
width: 100%;

.wrapper{
  @media (max-width:950px){
    flex-direction: column;
  }
}
`

export default Contact