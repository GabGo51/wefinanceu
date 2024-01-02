import React, { useContext } from "react";
import styled from "styled-components";
import account from "./img/account.PNG";
import { useState } from "react";
import text from './text/profilesText'
import { SettingContext } from "../../context/SettingContext";
import { motion } from "framer-motion";
import animations from "../animation";

const Profiles = () => {

  const {lang} = useContext(SettingContext)
  const [profile, setProfile] = useState("profile1");

  const handleNav = (name) => {
    setProfile(name);
  };

  return (
    <Container>
      <motion.h2 {...animations.fadeInFromDown} transition={{ duration: 1, delay: 0.1 }}>{text.title[lang]}</motion.h2>
      <nav>
        <ul className="noselect">
          <motion.li {...animations.fadeInFromDown} transition={{ duration: 0.3, delay: 0.1 }}
            onClick={() => {
              handleNav("profile1");
            }}
            className={profile === "profile1" ? "active" : ""}
          >
            profile1
          </motion.li>
          <motion.li {...animations.fadeInFromDown} transition={{ duration: 0.3, delay: 0.3 }}
            onClick={() => {
              handleNav("profile2");
            }}
            className={profile === "profile2" ? "active" : ""}
          >
            profile2
          </motion.li>
          <motion.li {...animations.fadeInFromDown} transition={{ duration: 0.3, delay: 0.5 }}
            onClick={() => {
              handleNav("profile3");
            }}
            className={profile === "profile3" ? "active" : ""}
          >
            profile3
          </motion.li>
        </ul>
      </nav>
      <motion.div initial={{scaleY:0.8, opacity:0}} whileInView={{scaleY:1, opacity:1}} transition={{ duration: 1, delay: 0.2 }} viewport={{once:true}} className="wrapper">
        {profile === "profile1" && (
          <>
            <div className="text">
              <div className="title">
                <h3>User</h3>
              </div>
              <p>
                WeFinanceU se consacre à démocratiser l'accès au financement
                immobilier commercial pour tous, que cela soit des débutants ou
                des experts dans le secteur.
              </p>
            </div>

            <img alt="device" src={account} />
          </>
        )}
        {profile === "profile2" && (
          <>
            <div className="text">
              <div className="title">
                <h3>Admin</h3>
              </div>
              <p>
                WeFinanceU se consacre à démocratiser l'accès au financement
                immobilier commercial pour tous, que cela soit des débutants ou
                des experts dans le secteur.
              </p>
            </div>

            <img alt="device" src={account} />
          </>
        )}
        {profile === "profile3" && (
          <>
            <div className="text">
              <div className="title">
                <h3>White Label</h3>
              </div>
              <p>
                WeFinanceU se consacre à démocratiser l'accès au financement
                immobilier commercial pour tous, que cela soit des débutants ou
                des experts dans le secteur.
              </p>
            </div>

            <img alt="device" src={account} />
          </>
        )}
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  background-color: var(--secondary);
  text-align: center;
  

  
  ul {
    display: flex;
    margin: 20px 0;
    

    li {
      transition: 500ms;
      padding: 15px 20px;
      border-radius: 30px;
      margin: 0 10px;
      cursor: pointer;

      &.active {
        background-color: var(--green);
      }
    }
  }

  .wrapper {
    height: 500px;
  
    border-radius: 30px;
    padding: 40px;
    background-color: white;
    @media (max-width: 950px) {
      flex-direction: column;
    }
  }

  .text {
    width: clamp(300px, 80%, 600px);
  }

  img {
    width: clamp(250px, 40%, 400px);
    border-radius: 20px;
  }
`;

export default Profiles;
