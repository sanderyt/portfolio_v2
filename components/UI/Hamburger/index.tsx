import React, { FC } from "react";
import styled from "styled-components";

import { FlexBox, FlexItem } from "react-styled-flex";

const StyledHamburger = styled(FlexBox)`
  width: 50px;
  height: 45px;
  position: fixed;
  top: 0;
  right: 0;
  padding-left: 14px;
  padding-top: 5px;
  z-index: ${props => props.theme.layers.layer4};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Line = styled.span`
  height: 3px;
  margin-bottom: ${props => props.theme.spacing.micro};
  background-color: ${props => props.theme.colors.primaryColor};
  border-radius: ${props => props.theme.borderRadius.small};
`;

const TopLine = styled(Line)`
  width: 12px;
`;

const MiddleLine = styled(Line)`
  width: 24px;
`;

const BottomLine = styled(Line)`
  width: 17px;
`;

type HamburgerProps = {
  clickHandler: () => void;
};

export const Hamburger: FC<HamburgerProps> = ({ clickHandler }) => {
  return (
    <StyledHamburger justifyContent="center" column onClick={clickHandler}>
      <TopLine />
      <MiddleLine />
      <BottomLine />
    </StyledHamburger>
  );
};
