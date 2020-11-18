import React, { FC } from "react";
import styled from "styled-components";

import { FlexBox } from "react-styled-flex";

type HeaderProps = {
  title: string;
  smallDescription?: string;
};

const StyledHeader = styled(FlexBox)`
  background-color: ${props => props.theme.colors.greyScales.veryLight};
  height: 200px;
`;

export const Header: FC<HeaderProps> = ({ title, smallDescription }) => {
  return (
    <StyledHeader width="100%" center column>
      <h1>{title}</h1>
      {smallDescription && <span>{smallDescription}</span>}
    </StyledHeader>
  );
};
