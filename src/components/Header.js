import React from "react";
import styled from "styled-components";
import { SettingContext } from "../context/SettingContext";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import blueLogo from "../img/blueLogo.PNG";
import logo from "../img/logopng.png";
import text from "./text";
import animations from "./animation";

// header component with nav links, language button, loging and try button
const Header = () => {

  const { open, lang, setLang, setOpen } = useContext(SettingContext);

  // open and close menu in phone design
  const toggleMenu = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
    setOpen(false);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Container>
      <AnimatePresence>
        {open ? (
          //phone design header
          <PhoneHeader
            key="phone-header" //must have for exit
            initial={{ left: "100vw", width: 0 }}
            animate={{ left: 0, width: "100vw" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            exit={{ left: "100vw", width: 0 }}
          >
            <img
              alt="logo"
              src={logo}
              onClick={() => handleNavigate("/")}
              className="logo"
            />

            <ul className="noselect">
            <li onClick={() => handleNavigate("/product")}>{text.solution[lang]}</li>
                <li onClick={() => handleNavigate("/about")}>{text.about[lang]}</li>
                <li onClick={() => handleNavigate("/contact")}>{text.contact[lang]}</li>
              <li onClick={() => handleNavigate("/contact")}>{text.login[lang]}</li>
            </ul>
            <div className="button-box">
              <button className="try-button">
              {text.tryButton[lang]}
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
            <motion.div
              initial={{ left: "100vw", width: 0 }}
              animate={{ left: 0, width: "100vw" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              exit={{ left: "100vw", width: 0 }}
              className="background"
            />
          </PhoneHeader>
        ) : (
          //Desktop desgign header
          <DesktopHeader
          {...animations.fadeInFromUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="wrapper">
              <img
                alt="logo"
                src={blueLogo}
                onClick={() => handleNavigate("/")}
              />
              <ul className="noselect">
                <li onClick={() => handleNavigate("/product")}>{text.solution[lang]}</li>
                <li onClick={() => handleNavigate("/about")}>{text.about[lang]}</li>
                <li onClick={() => handleNavigate("/contact")}>{text.contact[lang]}</li>
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
              </ul>
              <div className="button-box">
                <button className="login-button">
                  <p>{text.login[lang]}</p>
                </button>
                <button
                  
                  className="try-button"
                >
                  {text.tryButton[lang]}
                </button>
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

  .lang-button {
    display: flex;
    align-items: center;
  }
`;
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
  box-shadow: rgba(100, 100, 111, 0.1) 0px 2px 29px 0px;

  img {
    width: clamp(150px, 20%, 200px);
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
      color: var(--main);
      font-weight: 500;
      cursor: pointer;
      border-bottom: 1px solid white;
      &:hover {
        border-bottom: 1px solid var(--green);
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
    transform: translateX(-25%);
  }

  .lang {
    transition: 300ms;
    width: 40px;
    height: 35px;
    border: none;
    background-color: transparent;
    color: var(--main);
    cursor: pointer;
    color: black;


    &:hover {
      scale: 1.1;
    }
  }

  .menu {
    width: 100vw;
    height: 100svh;
    background-color: black;
  }

  .button-box{
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }

  @media (max-width: 1300px) {

    i {
      display: block;
    }

    ul {
      display: none;
    }

    div {
      display: none;
    }

    .button-box{
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

  img {
    display: block;
    z-index: 100;
    width: 200px;
    margin-top: -200px;
  }

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

  .lang {
    transition: 300ms;
    width: 35px;
    height: 35px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
    font-weight: 600;
    
    &:hover {
      scale: 1.1;
    }
  }

  .button-box {
    z-index: 100;
    margin-top: 60px;
  }

  .login-button {
    display: block;
    margin-top: 100px;
    color: white;
    font-weight: 600;
    border: 2px solid white;
  }

  .background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100svh;
    object-fit: cover;
    z-index: 99;
    background-color: var(--main);
  }
`;
export default Header;
