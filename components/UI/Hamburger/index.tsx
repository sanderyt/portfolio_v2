import React, { FC } from "react";
import styled from "styled-components";

import { FlexBox } from "react-styled-flex";

const StyledHamburger = styled(FlexBox)`
  width: 65px;
  height: 65px;
  position: fixed;
  top: ${props => props.theme.spacing.small};
  left: ${props => props.theme.spacing.small};
  z-index: ${props => props.theme.layers.layer4};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.round};
  box-shadow: ${props => props.theme.boxShadow};

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Line = styled.span`
  height: ${props => props.theme.spacing.micro};
  border-radius: ${props => props.theme.borderRadius.large};
  width: 35px;
  margin-bottom: ${props => props.theme.spacing.micro};
  background-color: ${props => props.theme.colors.primaryColor};
`;

type HamburgerProps = {
  clickHandler: () => void;
};

export const Hamburger: FC<HamburgerProps> = ({ clickHandler }) => {
  return (
    <StyledHamburger center column onClick={clickHandler}>
      <Line />
      <Line />
      <Line />
    </StyledHamburger>
  );
};
