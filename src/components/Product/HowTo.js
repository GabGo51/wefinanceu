import React, { useContext } from "react";
import { motion, spring } from "framer-motion";
import styled from "styled-components";
import account from "./img/account.PNG";
import greywave from "./img/greywave.png";
import animations from "../animation";
import text from "./text/howText";
import { SettingContext } from "../../context/SettingContext";

const HowTo = () => {
  const { lang } = useContext(SettingContext);
  return (
    <Container>
      <motion.h2
        {...animations.fadeInFromUp}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {text.title[lang]}
      </motion.h2>
      <div className="wrapper">
        <div className="text">
          <motion.div
            {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.2 }}
            className="title"
          >
            <div>1</div>
            <h3>{text.sub1[lang]}</h3>
          </motion.div>
          <motion.p
            {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {text.p1[lang]}
          </motion.p>
        </div>

        <motion.img
          {...animations.fadeInFromRight}
          transition={{ duration: 1, delay: 0.3 }}
          alt="device"
          src={account}
        />
      </div>
      <div className="wrapper reverse">
        <div className="text">
          <motion.div
            {...animations.fadeInFromRight}
            transition={{ duration: 1, delay: 0.2 }}
            className="title"
          >
            <div>2</div>
            <h3>{text.sub2[lang]}</h3>
          </motion.div>
          <motion.p
            {...animations.fadeInFromRight}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {text.p2[lang]}
          </motion.p>
        </div>

        <motion.img
          {...animations.fadeInFromLeft}
          transition={{ duration: 1, delay: 0.3 }}
          alt="device"
          src={account}
        />
      </div>
      <div className="wrapper">
        <div className="text">
          <motion.div
            {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.2 }}
            className="title"
          >
            <div>3</div>
            <h3>{text.sub3[lang]}</h3>
          </motion.div>
          <motion.p
            {...animations.fadeInFromLeft}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {text.p3[lang]}
          </motion.p>
        </div>

        <motion.img
          {...animations.fadeInFromRight}
          transition={{ duration: 1, delay: 0.3 }}
          alt="device"
          src={account}
        />
      </div>
      <div className="wrapper reverse">
        <div className="text">
          <motion.div {...animations.fadeInFromRight}
          transition={{ duration: 1, delay: 0.2 }} className="title">
            <div>4</div>
            <h3>{text.sub4[lang]}</h3>
          </motion.div>
          <motion.p {...animations.fadeInFromRight}
          transition={{ duration: 1, delay: 0.4 }}>{text.p4[lang]}</motion.p>
        </div>

        <motion.img {...animations.fadeInFromLeft}
          transition={{ duration: 1, delay: 0.3 }} alt="device" src={account} />
      </div>
      <img src={greywave} alt="wave" className="wave" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 50px;

  .video {
    height: 500px;
    background-color: grey;
    width: clamp(320px, 80%, 1000px);
    border-radius: 20px;
    margin-bottom: 50px;
  }

  img {
    width: clamp(250px, 40%, 400px);
    border-radius: 20px;
  }

  .wrapper {
    gap: 40px;
    margin: 40px 0;

    .text {
      width: clamp(300px, 80%, 600px);
    }

    .title {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        font-weight: 600;
        background-color: var(--green-light);
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    @media (max-width: 950px) {
      flex-direction: column;
    }
  }

  .reverse {
    flex-direction: row-reverse;
    @media (max-width: 950px) {
      flex-direction: column;
    }
  }

  .wave {
    width: 100vw;
    margin-bottom: -2px;
  }
`;

export default HowTo;
