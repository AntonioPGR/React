import { HeaderContainer, ChangeThemeButton } from "./styles";
import PropTypes from 'prop-types';

import { ThemeContext } from "styled-components";
import { useContext } from "react";


const Header = (props) => {
   const currentTheme = useContext(ThemeContext)

   return (
      <HeaderContainer >
         Logo

         <ChangeThemeButton onClick={() => props.changeTheme()}>
            Change to {currentTheme.theme === 'light'? 'dark' : 'light'} theme
         </ChangeThemeButton>
      </HeaderContainer>
   )
}

Header.propTypes = {
   changeTheme: PropTypes.func.isRequired,
}

export default Header;