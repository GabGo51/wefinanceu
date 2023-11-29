import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

  

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    
    
  }
  
  

  
  html, body {
    width: 100vw;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: content-box;
    font-family: 'Montserrat', sans-serif;
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

  h2{
    font-size: clamp(22px, 3vw, 30px);
    margin: 50px 0;
  }
  h3{
    font-size: clamp(20px, 3vw, 24px);
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    width: clamp(300px, 80%, 1200px);
    align-items: center;
  }

  .login-button{
    cursor: pointer;
    transition: 300ms;
    background-color: transparent;
    color: black;
    height: 35px;
    width: 120px;
    border-radius: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    .arrow{
      margin-left: 10px;
      transition: 300ms;
    }

    &:hover{
      background-color: black;
      color: white;
    }
  }

  
`;
