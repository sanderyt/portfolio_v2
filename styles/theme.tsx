import React, { FC, ReactNode } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primaryColor: "#06B49A",
    secondaryColor: "#06B49A",
    white: "#FFF",
    red: "#e74c3c",
    greyScales: {
      veryLight: "#fcfcfc",
      light: "#f7f7f7",
      medium: "#eee",
      dark: "#ccc",
      darker: "#aaa",
      text: "#808080",
    },
  },
  spacing: {
    micro: "4px",
    normal: "8px",
    small: "16px",
    medium: "24px",
    large: "32px",
    xl: "64px",
  },
  layers: {
    layer1: "1",
    layer2: "2",
    layer3: "3",
    layer4: "4",
    layer5: "5",
    layer6: "6",
  },
  transition: {
    ease: "all .3s ease",
  },
  borderRadius: {
    small: "1px",
    medium: "2px",
    large: "5px",
    round: "50%",
  },
  borders: {
    thinLine: "1px solid rgba(0, 0, 0, 0.1)",
  },
  boxShadow: "0 0 10px #adadad",
  fonts: {
    main: ["Gordita", "sans-serif"],
    heading: ["Circular", "sans-serif"],
  },
  fontSizes: {
    extraSmall: "0.75rem",
    small: "1rem",
    sm: "1.25rem",
    medium: "1.5rem",
    large: "2rem",
  },
  menuWidth: "400px",
};

type ThemeProps = {
  children: ReactNode;
};

export const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
