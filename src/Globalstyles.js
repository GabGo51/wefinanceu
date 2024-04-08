import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  /* colors and shades used  */
  :root{
    --main:#002F5A;
    --main-p:#003A52;
    --green:#00cf9d;
    --green-light:#00cf9d55; //the two last number are for opacity
    --secondary:#f6f6f6;
    --faded-grey:rgba(0, 163, 255, 0.26);
  }

  

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased; 
  }
  
 
  html, body {
    width: 100vw;
    overflow: hidden;
    box-sizing: content-box;
    font-family: 'Montserrat', sans-serif;
    
  }
  html{
    
    overflow-y: scroll;
  }


  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  h1 , h2 , h3  {
    font-family: 'Inter', sans-serif;
    color: var(--main);
  }

  h1{
    font-size: clamp(32px, 3vw, 48px);
  }

  h2{
    font-size: clamp(28px, 3vw, 42px);
    margin: 40px 0;
  }
  h3{
    font-size: clamp(18px, 3vw, 24px);
    margin: 20px 0;
  }

  p{
    font-size: clamp(16px, 3vw, 18px);
  }

  /* surrounding all main section div  */
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: clamp(300px, 80%, 1200px);
    align-items: center;

    @media (max-width: 950px) {
      width: 90%;
    }
  }
 /* try it free button styles   */

 .try-box{
  
 }
  .try-button{
    transition: 500ms;
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background: var(--green, #FFB22B);
    box-shadow: 2px 2px 10.3px 0px rgba(107, 240, 192, 0.50);

    color: #FFF;
    border: 2px solid var(--green);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;

    &:hover{
      background-color:transparent;
      color:var(--green);
      
    }

    @media (max-width:800px){
      font-size: 14px;
      width: 120px;
      height: 40px;
    }
  }

  .login-button{
      all: unset;
      transition: 500ms;
      padding: 10px 5px;
      margin: 5px 0;
      margin-right: 20px;
      color: var(--main);
      cursor: pointer;
      border-bottom: 1px solid white;
      &:hover {
        border-bottom: 1px solid var(--green);
        transform: translateY(-5%);
      }
  }

  

  .button-wrapper {
    transition: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    font-size: clamp(16px, 500%, 20px);
    
    h4 {
      font-weight: 400;
      
    }
    button {
      transition: 300ms;
      all: unset;
      cursor: pointer;
      font-weight: 600;
      margin-left: 10px;

      
    }

    i {
      margin-left: 10px;
    }
  }

  //no text highlight
  .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

  
`;
