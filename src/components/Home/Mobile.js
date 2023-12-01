import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import mobile from "./img/moble.png";
const Mobile = () => {
  return (
    <Container>
      <div className="wrapper">
      
        <div className="text-box">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}

            viewport = {{once:true}}
          >
            Use WeFinanceU on the go with our mobile app
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport = {{once:true}}
          >
            ahjfljabvlabvlablvabglbalgblagbl ajvfkahjf asfgahgfl b
            agflahjbflablfablzn v.z,nm gzkjgjkhzgjkhz{" "}
          </motion.p>
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport = {{once:true}}
            className="login-button"
          >
            Try it free
          </motion.button>
        </div>
        <motion.img
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport = {{once:true}}
          src={mobile}
        />

        
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 100px;

  .wrapper {
    .text-box {
      display: flex;
      flex-direction: column;
      margin-right: 50px;

      h1 {
        margin-bottom: 40px;
        font-size: clamp(24px, 3vw, 40px);
      }

      p {
      }

      button {
        margin: 40px 0;
        padding: 18px 0;
      }
    }

    img {
      border-radius: 30px;
      width: clamp(300px, 50%, 600px);
    }

    @media (max-width: 950px) {
      flex-direction: column;
      .text-box {
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: 0;
        max-width: 500px;
      }
    }
  }
`;

export default Mobile