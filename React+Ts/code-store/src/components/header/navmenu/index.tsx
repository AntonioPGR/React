// DATA
import NavMenuData from "data/navmenuLinks.json";

// COMPONENTS
import { Links } from "components/linksTo";

// STYLES
import { Nav } from "./styles";

const links = NavMenuData;

export default function NavMenu(){
  return (
    <Nav>
      <Links links={links} />
    </Nav>
  );
}