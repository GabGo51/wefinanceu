import React, { useContext } from "react";
import styled from "styled-components";
import { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import loadingCircle from "./img/loading.gif";
import text from './text/formText'
import { SettingContext } from "../../context/SettingContext";
const Form = () => {

  const {lang} = useContext(SettingContext)
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_bo9dzc3",
        "template_eoimxoe",
        form.current,
        "RfMxlDM4DncD31wYf"
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <Container>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>{text.name[lang]}</label>
          <input required type="text" name="user_name" />
        </div>
        <div>
          <label>Email</label>
          <input required type="email" name="user_email" />
        </div>
        <div>
          <label>{text.phone[lang]}</label>
          <input required type="phone" name="user_phone" />
        </div>
        <div>
          <label>{text.help[lang]}</label>
          <textarea required type="phone" name="user_message" />
        </div>
        <p>
        {text.privacy[lang]}
        </p>
        <div className="bottom">
          {loading && (
            <button disabled="true" className="try-button loading">
              <img src={loadingCircle} />
            </button>
          )}
          {sent && (
            <button disabled="true" className="try-button loading">
              <i className="fa-solid fa-check"></i>
            </button>
          )}
          {error && (
            <button disabled="true" className="try-button loading">
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
          {!loading && !sent && !error && (
            <button type="submit" className="try-button">
              {text.button[lang]}
            </button>
          )}
          {sent && (
            <p className="sent">
              {text.sent[lang]}
            </p>
          )}
          {error && (
            <p className="error">
              {text.error[lang]}
            </p>
          )}
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;

  @media (max-width: 950px) {
    justify-content: center;
  }
  form {
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    width: clamp(300px, 80%, 500px);
    background-color: white;

    @media (max-width: 950px) {
    width: 100%;
  }

    div {
      display: flex;
      flex-direction: column;
      margin: 20px 0;

      label {
        margin-bottom: 5px;
      }

      input,
      textarea {
        height: 30px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 5px 0px;
        outline: none;
        width: 100%;

        &:focus {
          border: 1px solid blue;
        }
      }

      textarea {
        height: 100px;
        resize: none;
      }
    }

    p {
      width: 90%;
      font-size: 10px;
      font-style: italic;
      line-height: 16px;
    }

    button {
      margin-top: 20px;
      margin-right: 20px;
      width: 100px;
      height: 40px;
      img {
        width: 30px;
      }
    }

    .loading {
      background-color: var(--green);
      color: white;
      cursor: not-allowed;
    }
  }
  .bottom {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;

    p {
      font-size: 12px;
      max-width: 300px;
    }
    .sent {
      color: green;
    }
    .error {
      color: red;
    }
  }
`;

export default Form;
