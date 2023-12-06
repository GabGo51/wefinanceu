import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
    --main-color:#015d85;
    --light-color: #def3ff;
    --grey-color:#f7f7fe;
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

  h2{
    font-size: clamp(22px, 3vw, 30px);
    margin: 40px 0;
  }
  h3{
    font-size: clamp(20px, 3vw, 24px);
    margin: 20px 0;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    width: clamp(300px, 80%, 1200px);
    align-items: center;
  }

  .login-button{
    cursor: pointer;
    font-weight: 600;
    transition: 300ms;
    background-color: transparent;
    height: 35px;
    width: 120px;
    border-radius: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #015d85;
      color:var(--main-color);
    .arrow{
      margin-left: 10px;
      transition: 300ms;
    }

    &:hover{
      
      background-color: #015d85;
      color:white;
      
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
