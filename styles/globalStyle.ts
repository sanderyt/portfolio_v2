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
    font-family: ${props => props.theme.fonts.heading[0]};
  }

  strong {
    color: black;
  }

  #nprogress .bar {
  background: ${props => props.theme.colors.primaryColor} !important;
  }

  #nprogress .spinner-icon {
    border-top-color: ${props => props.theme.colors.primaryColor} !important;
    border-left-color: ${props => props.theme.colors.primaryColor} !important;

    @media only screen and (max-width: 768px) {
      margin-top: 40px;
    }
  }

  .no-scroll {
    overflow: unset;
    position: fixed;
    width: 100%;
    top: attr(scrollPosition);
  }
  
  a {
    color: ${props => props.theme.colors.primaryColor};
    text-decoration: none;
    transition: ${props => props.theme.transition.ease};
    font-weight: bold;

    &:hover {
      color: ${props => props.theme.colors.greyScales.text};
    }
  }
`;
