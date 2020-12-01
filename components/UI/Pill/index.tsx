import React, { FC } from "react";
import styled from "styled-components";

import { FlexItem } from "react-styled-flex";

type PillProps = {
  children: string;
};

const StyledPill = styled(FlexItem)`
  background-color: ${(props) => props.techColor};
  color: white;
  padding: ${(props) => `${props.theme.spacing.micro} ${props.theme.spacing.small} `};
  border-radius: ${(props) => props.theme.borderRadius.large};
  margin: ${(props) => props.theme.spacing.micro};
`;

export const Pill: FC<PillProps> = ({ children }) => {
  const renderColor = (name: string): string => {
    if (name === "React") return "#61dafb";
    if (name === "NodeJS") return "#026e00";
    if (name === "Strapi") return "#8c4bff";
    if (name === "NextJS") return "#000";
    if (name === "TypeScript") return "#3178c6";
    if (name === "VueJS") return "#42b983";
    if (name === "Vuex") return "#42b983";
    if (name === "PHP") return "#8892BF";
    if (name === "WordPress") return "#0073aa";
    if (name === "CSharp") return "#903ba7";
    if (name === "Firebase") return "#ffcb31";
    if (name === "Unity") return "#000";
    return "#808080";
  };

  return <StyledPill techColor={renderColor(children)}>{children}</StyledPill>;
};
