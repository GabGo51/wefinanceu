import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const Stats = () => {

  const initial = {
    opacity:0, 
    y:50,
  }

  const animate = {
    opacity:1, 
    y:0,
  }

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  

  return (
    <Container>
      <motion.h2 initial={initial} animate={animate} transition={{duration:1, delay:0.5}}>WeFinance in Number</motion.h2>
      <div className='wrapper'>
        <motion.div initial={initial} animate={animate} transition={{duration:1, delay:0.7}}>
          <h3>100+</h3>
          <p>Lenders</p>
        </motion.div>
        <motion.div initial={initial} animate={animate} transition={{duration:1, delay:0.9}}>
          <h3>400M+</h3>
          <p>Funded</p>
        </motion.div>
        <motion.div initial={initial} animate={animate} transition={{duration:1, delay:1.1}}>
          <h3>25+</h3>
          <p>Years of Experience</p>
        </motion.div>
        <motion.div initial={initial} animate={animate} transition={{duration:1, delay:1.3}}>
          <h3>15+</h3>
          <p>Market Covered</p>
        </motion.div>
      </div>
      <div className='button-wrapper'>
        <h4>Learn more</h4>
        <motion.button onClick={()=>handleNavigate('/about')} whileHover={{marginRight:20}} transition={{duration:0.3}}>about us</motion.button>
        <i class="fa-solid fa-arrow-right"></i>
      </div>


    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



.wrapper{
  div{
    margin: 40px 0;
  }
  h3{
    color: #015d85;
  }
}

.button-wrapper{
  display: flex;
  align-items: center;
  margin-top: 40px;
  h4{
    font-weight: 400;
  }
  button{
    transition: 300ms;
    all: unset;
    cursor: pointer;
    font-weight: 600;
    margin-left: 10px;

  }

  i{
    margin-left: 10px;
  }
}

@media (max-width:950px){
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