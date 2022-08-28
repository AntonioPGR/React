// COMPONENTS
import NavMenu from "./navmenu";
import SiteLogo from "components/SiteLogo";

// STYLES
import { HeaderContainer } from "./styles";


export default function Header(){
  return(
    <HeaderContainer>
      <SiteLogo />
      <NavMenu />
    </HeaderContainer >
  );
}