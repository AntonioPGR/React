// ASSETS
import Source from "assets/images/logo/CodeStoreLogo.png";
import { ImageContainer, Logo } from "./styles";

export default function SiteLogo(){
  return (
    <ImageContainer>
      <Logo src={Source} alt="logo do site da Code Store" />
    </ImageContainer>
  );
}