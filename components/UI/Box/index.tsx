import React, { ReactNode, FC } from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 25px;
`;

type BoxProps = {
  children: ReactNode;
};

export const Box: FC<BoxProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};
