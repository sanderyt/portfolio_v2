import React, { FC } from "react";
import styled from "styled-components";

import { FlexItem } from "react-styled-flex";

type PillProps = {
  children: string;
};

const StyledPill = styled(FlexItem)`
  background-color: ${props => props.techColor};
  color: white;
  padding: ${props =>
    `${props.theme.spacing.micro} ${props.theme.spacing.small} `};
  border-radius: ${props => props.theme.borderRadius.large};
  margin: ${props => props.theme.spacing.micro};
`;

export const Pill: FC<PillProps> = ({ children }) => {
  const renderColor = (name: string) => {
    if (name === "React") return "#61dafb";
    if (name === "NodeJS") return "#026e00";
    if (name === "Strapi") return "#8c4bff";
    if (name === "NextJS") return "#000";
    if (name === "TypeScript") return "#3178c6";
    return "#808080";
  };
  return <StyledPill techColor={renderColor(children)}>{children}</StyledPill>;
};
