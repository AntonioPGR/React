// COMPONENTS
import SocialMediaLinks from "./socialMediaLinks";

// ASSETS
import SiteLogo from "components/SiteLogo";

//STYLES
import { FooterContainer } from "./styles";


export default function Footer(){
  return (
    <FooterContainer>
      <SiteLogo />
      <SocialMediaLinks />
    </FooterContainer>
  );
}