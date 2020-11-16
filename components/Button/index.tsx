import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: ReactNode;
  isSubmit?: boolean;
};

export const Button: FC<ButtonProps> = ({ children, isSubmit }) => {
  const Button = styled.button`
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
        props.primary ? `${props.theme.colors.secondaryColor}` : "navy"};
    }
  `;

  return (
    <Button primary type={isSubmit ? "submit" : "button"}>
      {children}
    </Button>
  );
};
