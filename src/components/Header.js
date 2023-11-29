import React from "react";
import styled from "styled-components";
import { SettingContext } from "../context/SettingContext";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import building from '../img/building.webp'

const Header = () => {
  const { open, lang, setLang, setOpen } = useContext(SettingContext);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    setOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  console.log(open);
  return (
    <>
      <AnimatePresence>
        {open ? (
          <PhoneHeader
            key="phone-header" //must have for exit
            initial={{ height: 0, opacity: 0  }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5, delay:0.2 }}
            exit={{ height: 0, opacity: 0 }}
            
          >
            <p onClick={() => handleNavigate("/")} className="logo">
              WeFinanceU
            </p>
            <ul>
              <li onClick={() => handleNavigate("/about")}>About</li>
              <li onClick={() => handleNavigate("/product")}>Product</li>
              <li onClick={() => handleNavigate("/team")}>Team</li>
              <li onClick={() => handleNavigate("/contact")}>Contact Us</li>
            </ul>
            <div className="button-box">
              <button className="login-button">
                <p>Login</p>
                
              </button>

              <div className="lang-button">
                <button
                  style={{ opacity: !lang ? 1 : 0.5 }}
                  onClick={() => {
                    setLang(false);
                  }}
                  className="lang fr"
                >
                  FR
                </button>
                <button
                  style={{ opacity: lang ? 1 : 0.5 }}
                  onClick={() => {
                    setLang(true);
                  }}
                  className="lang eng"
                >
                  EN
                </button>
              </div>
            </div>
            <i onClick={toggleMenu} className="fa-solid fa-x"></i>
            <motion.img initial={{height:0}} animate={{height:'100svh'}} transition={{duration:0.7}} className="background" src={building}/>
          </PhoneHeader>
        ) : (
          <DesktopHeader
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 80, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="wrapper">
              <p onClick={() => handleNavigate("/")}>WeFinanceU</p>
              <ul>
                <li onClick={() => handleNavigate("/about")}>About</li>
                <li onClick={() => handleNavigate("/product")}>Product</li>
                <li onClick={() => handleNavigate("/team")}>Team</li>
                <li onClick={() => handleNavigate("/contact")}>Contact Us</li>
              </ul>
              <div className="button-box">
                <button className="login-button">
                  <p>Login</p>
                  
                </button>

                <div>
                  <button
                    style={{ opacity: !lang ? 1 : 0.5 }}
                    onClick={() => {
                      setLang(false);
                    }}
                    className="lang fr"
                  >
                    FR
                  </button>
                  <button
                    style={{ opacity: lang ? 1 : 0.5 }}
                    onClick={() => {
                      setLang(true);
                    }}
                    className="lang eng"
                  >
                    EN
                  </button>
                </div>
              </div>
              <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
            </div>
          </DesktopHeader>
        )}
      </AnimatePresence>
    </>
  );
};

const DesktopHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 80px;
  width: 100vw;
  padding: 20px 0px;
  z-index: 100;

  .wrapper {
    display: flex;
  }
  ul {
    display: flex;
    li {
      margin-right: 20px;
      cursor: pointer;
    }
  }
  div {
    display: flex;
    margin-left: 10px;
  }

  i {
    display: none;
    cursor: pointer;
    scale: 1.5;
  }

  .lang{
    width: 35px;
    height: 35px;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
    color: black;

  }

  .fr {
    border-radius: 50% 0 0 50%;
    
  }
  .eng {
    border-radius: 0% 50% 50% 0%;
  }

  .menu {
    width: 100vw;
    height: 100svh;
    background-color: black;
  }

  @media (max-width: 900px) {
    i {
      display: block;
    }
    ul {
      display: none;
    }
    div {
      display: none;
    }
  }
`;
const PhoneHeader = styled(motion.header)`
  
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  width: 100vw;
  height: 120vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      margin: 20px 0;
      font-weight: 600;
      cursor: pointer;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }

  i {
    scale: 1.5;
    z-index: 100;
    position: absolute;
    top: 30px;
    right: 10vw;
  }

  .logo {
    z-index: 100;
    margin-bottom: 100px;
    cursor: pointer;
  }

  .lang-button {
    z-index: 100;
    position: absolute;
    top: 20px;
    left: 10vw;
  }

  .lang{
    width: 35px;
    height: 35px;
    border: 2px solid white;
    background-color: transparent;
    cursor: pointer;
    color: white;
    font-weight: 600;

  }

  .fr {
    border-radius: 50% 0 0 50%;
    
  }
  .eng {
    border-radius: 0% 50% 50% 0%;
  }

  .button-box{
    z-index: 100;
  }

  .login-button {
    display: block;
    margin-top: 100px;
    color: white;
    font-weight: 600;
    border: 2px solid white;
  }

  .background{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100svh;
    object-fit: cover;
    z-index: 1;
  }
`;
export default Header;
