import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "#06B49A",
    secondaryColor: "#06B49A",
    white: "#FFF"
  },
  transition: {
    ease: "250ms"
  },
  borderRadius: {
    small: "1px",
    medium: "2px",
    large: "5px"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
