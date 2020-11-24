import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

type SpinnerProps = {};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  border: 4px solid ${props => props.theme.colors.greyScales.veryLight};
  border-top: 4px solid ${props => props.theme.colors.greyScales.dark};
  border-radius: ${props => props.theme.borderRadius.round};
  width: ${props => props.theme.spacing.medium};
  height: ${props => props.theme.spacing.medium};
  animation: ${spin} 2s linear infinite;
`;

export const Spinner: FC<SpinnerProps> = ({}) => <StyledSpinner />;
