import styled from "styled-components";
import { Container } from "assets/styles/containers/container";

export const FlexContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  justify-items: center;
  align-items: top;
  align-content: center;
`;