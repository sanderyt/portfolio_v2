import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      white: string;
      red: string;
      greyScales: {
        veryLight: string;
        light: string;
        medium: string;
        dark: string;
        darker: string;
        text: string;
      };
    };
    spacing: {
      micro: string;
      normal: string;
      small: string;
      medium: string;
      large: string;
      xl: string;
    };
    layers: {
      layer1: string;
      layer2: string;
      layer3: string;
      layer4: string;
    };
    transition: {
      ease: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      round: string;
    };
    borders: {
      thinLine: string;
    };
    boxShadow: string;
    fonts: {
      main: string[];
      heading: string[];
    };
    fontSizes: {
      extraSmall: string;
      small: string;
      sm: string;
      medium: string;
      large: string;
    };
    menuWidth: string;
  }
}
