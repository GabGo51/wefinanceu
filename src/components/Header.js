import React from "react";
import styled from "styled-components";
import { SettingContext } from "../context/SettingContext";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


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
      behavior: 'smooth',
    });
  };

  console.log(open);
  return (
    <>
      <AnimatePresence>
        {open ? (
          <PhoneHeader
            key="phone-header" //must have for exit
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <p onClick={() => handleNavigate("/")} className="logo">WeFinanceU</p>
            <ul>
              <li onClick={() => handleNavigate("/about")}>About</li>
              <li onClick={() => handleNavigate("/product")}>Product</li>
              <li onClick={() => handleNavigate("/team")}>Team</li>
              <li onClick={() => handleNavigate("/contact")}>Contact Us</li>
            </ul>
            <div className="button-box">
              <button className="login-button">
                <p>Login</p>
                <p className="arrow">⟶</p>
              </button>

              <div className="lang-button">
                <button
                  style={{ opacity: !lang ? 1 : 0.5 }}
                  onClick={() => {
                    setLang(false);
                  }}
                  className="fr"
                >
                  FR
                </button>
                <button
                  style={{ opacity: lang ? 1 : 0.5 }}
                  onClick={() => {
                    setLang(true);
                  }}
                  className="eng"
                >
                  EN
                </button>
              </div>
            </div>
            <i onClick={toggleMenu} className="fa-solid fa-x"></i>
          </PhoneHeader>
        ) : (
          <DesktopHeader initial={{ height: 0, opacity: 0 }}
          animate={{height:80, opacity: 1 }}
          transition={{ duration: 0.5, delay:0.5 }}
          exit={{ height: 0, opacity: 0 }}>
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
                <p className="arrow">⟶</p>
              </button>

              <div>
                <button
                  style={{ opacity: !lang ? 1 : 0.5 }}
                  onClick={() => {
                    setLang(false);
                  }}
                  className="fr"
                >
                  FR
                </button>
                <button
                  style={{ opacity: lang ? 1 : 0.5 }}
                  onClick={() => {
                    setLang(true);
                  }}
                  className="eng"
                >
                  EN
                </button>
              </div>
            </div>
            <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
          </DesktopHeader>
        )}
      </AnimatePresence>
    </>
  );
};

const DesktopHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  background-color: white;
  height: 80px;
  width: clamp(300px, 80%, 1200px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
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
  }

  .fr {
    border-radius: 50% 0 0 50%;
    width: 35px;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
  }
  .eng {
    border-radius: 0% 50% 50% 0%;
    width: 35px;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  width: 100vw;
  height: 120vh;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      margin: 20px 0;
    }
  }

  i {
    position: absolute;
    top: 20px;
    right: 10vw;
  }

  .logo {
    margin-bottom: 100px;
  }

  .lang-button{
    position: absolute;
    top: 20px;
    left: 10vw;
  }

  .fr {
    border-radius: 50% 0 0 50%;
    width: 35px;
    height: 35px;
    border: 1px solid white;
    background-color: transparent;
    cursor: pointer;
    color: white;
  }
  .eng {
    border-radius: 0% 50% 50% 0%;
    width: 35px;
    height: 35px;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    cursor: pointer;
  }

  .login-button {
    margin-top: 100px;
  }
`;
export default Header;
