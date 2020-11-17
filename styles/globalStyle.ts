import { createGlobalStyle } from "styled-components";
import styledSanitize from "styled-sanitize";

export const GlobalStyle = createGlobalStyle`
  ${styledSanitize}

  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    src: url("../fonts/Montserrat-Regular.ttf");
  }

  @font-face {
    font-family: "WorkSans";
    font-weight: 500;
    src: url("../fonts/WorkSans-Regular.ttf");
  }

  body,
  html,
  button,
  ul,
  li,
  input,
  textarea {
    font-family: ${props => props.theme.fonts.main[0]};
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading[0]}
  }
`;
