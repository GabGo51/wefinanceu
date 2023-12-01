import React from "react";
import styled from "styled-components";
import { SettingContext } from "../context/SettingContext";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import building from '../img/building.webp'
import blueLogo from '../img/blueLogo.PNG'
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
    <Container>
      <AnimatePresence>
        {open ? (
          <PhoneHeader
            key="phone-header" //must have for exit
            initial={{ left:"100vw", width:0}}
            animate={{ left:0, width:'100vw' }}
            transition={{ duration: 0.3, delay:0.2 }}
            exit={{ left:"100vw", width:0 }}
            
          >
            <p onClick={() => handleNavigate("/")} className="logo">
              WeFinanceU
            </p>
            <ul className="noselect">
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
                <>|</>
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
            <motion.img initial={{ left:"100vw", width:0}}
            animate={{ left:0, width:'100vw' }}
            transition={{ duration: 0.3, delay:0.2 }}
            exit={{ left:"100vw", width:0 }}  className="background" src={building}/>
          </PhoneHeader>
        ) : (
          <DesktopHeader
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 80, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="wrapper">
              <img src={blueLogo} onClick={() => handleNavigate("/")}/>
              <ul className="noselect">
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
                  <>|</>
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
    </Container>
  );
};
const Container = styled.div`
width: 100%;
.lang-button{
  display: flex;
  align-items: center;
}

`
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

  img{
    width:clamp(150px ,20% ,200px);
      cursor: pointer;
      margin-left: -10px;
  }

  .wrapper {
    display: flex;
    align-items: center;
  }
  ul {
    display: flex;
    li {
      transition: 500ms;
      padding: 10px 5px;
      margin: 5px 0;
      margin-right: 20px;
      cursor: pointer;
      border-bottom: 1px solid white;
      &:hover {
        border-bottom: 1px solid #015d85;
        transform: translateY(-5%);
      }
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
    transition: 300ms;
    width: 40px;
    height: 35px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: black;
    &:hover{
      scale: 1.1;
      
    }

  }

  

  .menu {
    width: 100vw;
    height: 100svh;
    background-color: black;
  }

  @media (max-width: 950px) {
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
    display: flex;
    align-items: center;
    
  }

  .lang{
    transition: 300ms;
    width: 35px;
    height: 35px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
    font-weight: 600;
    &:hover{
      scale: 1.1;
    }
    
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
    z-index: 99;
  }
`;
export default Header;
