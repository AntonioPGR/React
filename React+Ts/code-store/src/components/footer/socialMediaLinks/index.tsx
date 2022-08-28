// DATA
import { Links } from "components/linksTo";
import SocialMediaData from "data/socialMediaLinks.json";

//STYLES
import { NavMenu } from "./styles";

// COMPONENTS


const links = SocialMediaData;

export default function SocialMediaLinks(){
  return(
    <NavMenu>
      <Links links={links} />
    </NavMenu>
  );
}