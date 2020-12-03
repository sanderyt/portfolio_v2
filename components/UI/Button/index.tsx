import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { lighten } from "polished";

import { Spinner } from "../Spinner";
import { device } from "../../../styles/device";

type ButtonProps = {
  children: ReactNode;
  isLoading: boolean;
  isSubmit: boolean;
};

interface StyledButtonProps {
  readonly isLoading: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  outline: none;
  min-width: 130px;
  margin: ${(props) => props.theme.spacing.medium};
  padding: ${(props) => `${props.theme.spacing.normal} ${props.theme.spacing.small}`};
  height: 48px;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.large};
  background-color: ${(props) =>
    props.isLoading ? props.theme.colors.greyScales.dark : props.theme.colors.primaryColor};
  transition: ${(props) => `${props.theme.transition.ease}`};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  &:hover {
    background-color: ${(props) =>
      props.isLoading
        ? props.theme.colors.greyScales.dark
        : lighten(0.05, props.theme.colors.primaryColor)};
  }
`;

export const Button: FC<ButtonProps> = ({ children, isSubmit, isLoading }) => {
  return (
    <StyledButton type={isSubmit ? "submit" : "button"} isLoading={isLoading} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </StyledButton>
  );
};
