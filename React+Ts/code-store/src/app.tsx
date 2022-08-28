// COMPONENTS
import AppRoutes from "./appRoutes";

// STYLES
import { GlobalStyle } from "assets/styles/global";

//-----
export default function App(){
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}