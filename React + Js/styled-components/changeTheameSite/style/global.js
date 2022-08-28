import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
      font-family: Arial, Helvetica, sans-serif;
      padding: 0;
      margin: 0;
      border: 0;
      box-sizing: content-box;
   }

   body{
      background-color: ${props=> props.theme.colors.bgColor};
      color: ${props=> props.theme.colors.textColor};
      font-size: 14px;
   }
`

export default GlobalStyle;