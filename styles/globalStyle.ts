import { createGlobalStyle } from "styled-components";
import styledSanitize from "styled-sanitize";

export const GlobalStyle = createGlobalStyle`

  ${styledSanitize}
  
  body {
    font-family: ${props => props.theme.fonts.main[0]}
  }
`;
