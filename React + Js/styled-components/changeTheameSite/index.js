import React from 'react';
import reactDom from 'react-dom';
import GlobalStyle from './style/global';
import { ThemeProvider } from 'styled-components';
import usePersistentState from './utils/usePersistentState';

import Header from './components/header/header';

import light from './style/theme/light';
import dark from './style/theme/dark';

function App(){
   const [theme, setTheme] = usePersistentState('theme', light)

   console.log(theme)

   const changeTheme = () => {
      setTheme(theme === light? dark : light )
   }

   return(
      <ThemeProvider theme={theme}>
         <div className='App'>
            <GlobalStyle />

            <Header changeTheme={changeTheme} />
         </div>
      </ThemeProvider>
   )
}

reactDom.render(
   <App />,
   document.querySelector("#root")
)