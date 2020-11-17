import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "#06B49A",
    secondaryColor: "#06B49A",
    white: "#FFF",
    red: "#e74c3c"
  },
  transition: {
    ease: "250ms"
  },
  borderRadius: {
    small: "1px",
    medium: "2px",
    large: "5px"
  },
  boxShadow: "0 0 10px #adadad",
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    extraSmall: "0.75rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
