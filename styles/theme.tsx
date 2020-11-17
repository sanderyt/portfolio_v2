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
      darker: "#aaa"
    }
  },
  spacing: {
    normal: "8px",
    small: "16px",
    medium: "24px",
    large: "32px"
  },
  layers: {
    layer1: "1",
    layer2: "2",
    layer3: "3",
    layer4: "4"
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
  fonts: {
    main: ["WorkSans", "sans-serif"],
    heading: ["Montserrat", "sans-serif"]
  },
  fontSizes: {
    extraSmall: "0.75rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem"
  }
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
