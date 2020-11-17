import React from "react";
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
`;

const Line = styled.span`
  height: 5px;
  width: 35px;
  margin-bottom: ${props => props.theme.spacing.micro};
  background-color: ${props => props.theme.colors.primaryColor};
`;

export const Hamburger = () => {
  return (
    <StyledHamburger center column>
      <Line />
      <Line />
      <Line />
    </StyledHamburger>
  );
};
