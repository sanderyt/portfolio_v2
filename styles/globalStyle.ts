import { createGlobalStyle } from "styled-components";
import styledSanitize from "styled-sanitize";

export const GlobalStyle = createGlobalStyle`
  ${styledSanitize}

  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    src: url("../fonts/Montserrat-Regular.ttf");
    font-display: swap;
  }

  @font-face {
    font-family: "WorkSans";
    font-weight: 500;
    src: url("../fonts/WorkSans-Regular.ttf");
    font-display: swap;
  }

  @font-face {
    font-family: "Circular";
    font-weight: 500;
    src: url("../fonts/CircularStd-Medium.otf");
    font-display: swap;
  }

  @font-face {
    font-family: "Gordita";
    font-weight: 500;
    src: url("../fonts/Gordita-Regular.otf");
    font-display: swap;
  }

  @font-face {
    font-family: "Gordita";
    font-weight: 700;
    src: url("../fonts/Gordita-Medium.otf");
    font-display: swap;
  }

  body,
  html,
  button,
  ul,
  li,
  input,
  textarea {
    font-family: ${(props) => props.theme.fonts.main[0]};
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading[0]};
  }

  strong {
    color: black;
  }

  #nprogress .bar {
  background: ${(props) => props.theme.colors.primaryColor} !important;
  }

  #nprogress .spinner-icon {
    border-top-color: ${(props) => props.theme.colors.primaryColor} !important;
    border-left-color: ${(props) => props.theme.colors.primaryColor} !important;

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
    color: ${(props) => props.theme.colors.primaryColor};
    text-decoration: none;
    transition: ${(props) => props.theme.transition.ease};

    &:hover {
      color: ${(props) => props.theme.colors.greyScales.text};
    }
  }

  .svg-inline--fa.fa-w-16, 
  .svg-inline--fa.fa-w-20,
  .svg-inline--fa.fa-w-14 {
    margin: ${(props) => `0 ${props.theme.spacing.normal}`}
  }
`;
