import React from 'react';
import reactDom from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';


const ChangeColorButton = styled.button`
      border: 1px solid gray;
      padding: 10px 5px;
      font-size: 1rem;
      background-color: ${props => props.bgColor || "#fff"};
      cursor: pointer;
   `

   const NameInput = styled.input.attrs(props => ({
      type: "text",
      placeholder: props.placeholder || "input your name here",
   }))`
      margin: 5px 0;
      padding: 10px;
      font-size: 1.2em;
   `;
   const PasswordInput = styled(NameInput).attrs(props => ({
      type: "password",
      placeholder: "your password here",
   }))`
      background-color: #ccc;
   `;

   const RodaRoda = keyframes`
      from{
         transform: rotate(0deg);
      }
      to{
         transform: rotate(360deg);
      }
   `
   const RodaRodaJequiti = styled.div`
      width: 100px;
      height: 100px;
      background-color: #ffcc11;
      margin: auto;
      animation: ${RodaRoda} 3s linear infinite;
   `

   const textCenter = true;

   const StyledSection = styled.section`
      max-width: 500px;
      margin: 0px auto;
      background-color: #eee;
      text-align: ${textCenter === true? "center": "left"};
      padding: 10px;
   `

   const Titles = styled.div`
      *{
         padding: 10px;
      }
   `

   const MainTitle = styled.h1`
      background-color: salmon;
      font-size: 2rem;
      color: ${props => props.textColor || "#fff"};
   `

   // another title based on MainTitle but overwriting some styles
   const SubTitle= styled(MainTitle)`
      font-size: 1.2rem;
      color: ${props => props.textColor || "#fff"};
   `

   const MainParagrafh = styled.p`
      background-color: #aaaaff;
      color: ${props => props.textColor || "#fff"};
      font-family: Arial, Helvetica, sans-serif;
      padding: 10px;
   `


function App(){
   const [textColor, setTextColor] = useState('#fff');

   const changeTextColor = () => {
      setTextColor(
         textColor === "#fff"? "#000":"#fff"
      )
   };
   
   return(
      <StyledSection>

         <Titles>
            <MainTitle textColor={textColor}>
               Hello World!
            </MainTitle>
            <SubTitle textColor={textColor} as="h2">
               this is a subtitle based on MainTitle
            </SubTitle>
         </Titles>

         <MainParagrafh textColor={textColor}>
            this is my first website using styled-components
         </MainParagrafh>

         <ChangeColorButton bgColor="#afa" onClick={changeTextColor}>
            Click here to change the text color
         </ChangeColorButton>

         <NameInput />
         <PasswordInput />

         <div id="animation" style={{padding: 20 + "px"}}>
            <RodaRodaJequiti />
         </div>

      </StyledSection>
   )
}

reactDom.render(
   <App />,
   document.querySelector("#root")
)