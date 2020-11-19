import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import { FlexBox, FlexItem } from "react-styled-flex";
import { Button } from "../Button";

type HeaderProps = {
  title: string;
  smallDescription?: string;
  children: ReactNode;
};

const StyledHeader = styled(FlexBox)`
  background-color: ${props => props.theme.colors.greyScales.veryLight};
  height: 200px;
  padding-left: ${props => props.theme.spacing.xl};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primaryColor};
`;

export const Header: FC<HeaderProps> = ({
  title,
  smallDescription,
  children
}) => {
  return (
    <StyledHeader width="100%" justifyContent="center" wrap>
      <FlexItem
        box
        column
        alignItems="start"
        justifyContent="center"
        width="100%"
        flex={1}
      >
        <Title>{title}</Title>
        {smallDescription && <span>{smallDescription}</span>}
      </FlexItem>
      <FlexItem
        box
        justifyContent="center"
        alignItems="center"
        width="100%"
        flex={1}
      >
        {children}
      </FlexItem>
    </StyledHeader>
  );
};
