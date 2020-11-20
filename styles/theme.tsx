import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "#06B49A",
    secondaryColor: "#06B49A",
    white: "#FFF",
    red: "#e74c3c",
    greyScales: {
      veryLight: "#fcfcfc",
      light: "#f7f7f7",
      medium: "#ccc",
      darker: "#aaa",
      text: "#808080"
    }
  },
  spacing: {
    micro: "4px",
    normal: "8px",
    small: "16px",
    medium: "24px",
    large: "32px",
    xl: "64px"
  },
  layers: {
    layer1: "1",
    layer2: "2",
    layer3: "3",
    layer4: "4"
  },
  transition: {
    ease: "all .3s ease"
  },
  borderRadius: {
    small: "1px",
    medium: "2px",
    large: "5px",
    round: "50%"
  },
  borders: {
    thinLine: "1px solid rgba(0, 0, 0, 0.1)"
  },
  boxShadow: "0 0 10px #adadad",
  fonts: {
    main: ["WorkSans", "sans-serif"],
    heading: ["Montserrat", "sans-serif"]
  },
  fontSizes: {
    extraSmall: "0.75rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem"
  },
  menuWidth: "400px"
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
