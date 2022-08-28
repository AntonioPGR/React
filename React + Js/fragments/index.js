import React from 'react';
import ReactDOM  from 'react-dom';

function App(){
   // o <> </> no render faz o react não renderizar uma div envolvendo os elementos e apenas os põe no elemento pai
   return(
      <>
         {
            // cria o elemento em outra div pai, nesse caso aqui ele criará no header pré-criado no index.html
            ReactDOM.createPortal(
               <h1>Users Table</h1>,
               document.querySelector('header')
            )
         }
         <p>este é um site testando React Portals e Fragment</p>
         <FragmentTest />
      </>
   )
}

function FragmentTest(){
   return (
      <>
         <h1> Fragment Test</h1>
      </>
   )
   
}

ReactDOM.render(
   <App />,
   document.getElementById("root")
)  
