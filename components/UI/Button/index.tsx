import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { lighten } from "polished";

type ButtonProps = {
  children: ReactNode;
  isSubmit?: boolean;
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 12px 24px;
  cursor: pointer;
  font-weight: bold;
  font-size: ${props => `${props.theme.fontSizes.small}`};
  color: ${props => `${props.theme.colors.white}`};
  border-radius: ${props => `${props.theme.borderRadius.large}`};
  background-color: ${props =>
    props.primary ? `${props.theme.colors.primaryColor}` : "navy"};
  transition: ${props => `${props.theme.transition.ease}`};

  &:hover {
    background-color: ${props =>
      props.primary ? lighten(0.05, props.theme.colors.primaryColor) : "navy"};
  }
`;

export const Button: FC<ButtonProps> = ({ children, isSubmit }) => {
  return (
    <StyledButton primary type={isSubmit ? "submit" : "button"}>
      {children}
    </StyledButton>
  );
};
