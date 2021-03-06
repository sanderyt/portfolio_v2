import React, { FC } from "react";
import styled from "styled-components";
import { device } from "../../../styles/device";

import { FlexBox } from "react-styled-flex";

interface LineProps {
  readonly isOpen: boolean;
}

const StyledHamburger = styled(FlexBox)`
  width: 50px;
  height: 45px;
  position: fixed;
  top: 0;
  right: 0;
  padding-left: 14px;
  padding-top: 5px;
  z-index: ${(props) => props.theme.layers.layer6};
  background-color: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.borders.thinLine};

  @media ${device.laptop} {
    display: none;
  }
`;

const Line = styled.span`
  height: 3px;
  margin-bottom: ${(props) => props.theme.spacing.micro};
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: ${(props) => props.theme.borderRadius.small};
  transition: ${(props) => props.theme.transition.ease};
`;

const TopLine = styled(Line)<LineProps>`
  width: ${(props) => (props.isOpen ? `24px` : `12px`)};
  transform: ${(props) => props.isOpen && `rotate(45deg) translateY(-2px)`};
  transform-origin: ${(props) => props.isOpen && `0 50%`};
`;

const MiddleLine = styled(Line)<LineProps>`
  width: ${(props) => (props.isOpen ? `0` : `24px`)};
  opacity: ${(props) => (props.isOpen ? `0` : `1`)};
`;

const BottomLine = styled(Line)<LineProps>`
  width: ${(props) => (props.isOpen ? `24px` : `12px`)};
  transform: ${(props) => props.isOpen && `rotate(-45deg) translateY(2px)`};
  transform-origin: ${(props) => props.isOpen && `0 50%`};
`;

type HamburgerProps = {
  clickHandler: () => void;
  isOpen: boolean;
};

export const Hamburger: FC<HamburgerProps> = ({ clickHandler, isOpen }) => {
  return (
    <StyledHamburger justifyContent="center" column onClick={clickHandler}>
      <TopLine isOpen={isOpen} />
      <MiddleLine isOpen={isOpen} />
      <BottomLine isOpen={isOpen} />
    </StyledHamburger>
  );
};
