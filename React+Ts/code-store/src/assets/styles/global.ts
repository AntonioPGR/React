import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body, body *{
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    box-sizing: border-box;
    background-color: #00000000;
    list-style: none;
    display: block;
    text-align: left;
    font-size: 16px;
  }
`;