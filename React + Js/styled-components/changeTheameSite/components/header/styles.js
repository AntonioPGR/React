import styled from 'styled-components';
import { shade } from 'polished';

const HeaderContainer = styled.header`
   height: 50px;
   padding: 0 30px;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.secondary};

   display: flex;
   align-items: center;
   align-content: space-between;
   justify-items: center;
   justify-content: space-between;

   letter-spacing: 2px;
`

const ChangeThemeButton = styled.button`
   letter-spacing: 1px;
   padding: 7px;
   background-color: transparent;
   border: 2px solid ${props => props.theme.colors.secondary};
   color: ${props => props.theme.colors.secondary};
   border-radius: 4px;
   cursor: pointer;
`

export { HeaderContainer, ChangeThemeButton };