import React, { FC } from "react";
import styled from "styled-components";

import { FlexBox } from "react-styled-flex";

type HeaderProps = {
  title: string;
};

const StyledHeader = styled(FlexBox)`
  background-color: ${props => props.theme.colors.greyScales.light};
  height: 200px;
`;

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader width="100%" center>
      <h1>{title}</h1>
    </StyledHeader>
  );
};
