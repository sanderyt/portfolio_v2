import React, { FC } from "react";
import styled from "styled-components";

import { FlexBox } from "react-styled-flex";

type HeaderProps = {};

const StyledHeader = styled(FlexBox)`
  background-color: ${props => props.theme.colors.greyScales.light};
  height: 200px;
`;

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <StyledHeader width="100%" center>
      <h1>Projects</h1>
    </StyledHeader>
  );
};
