import React, { FC } from "react";
import styled from "styled-components";

import { FlexBox } from "react-styled-flex";

type HeaderProps = {
  title: string;
  smallDescription?: string;
};

const StyledHeader = styled(FlexBox)`
  background-color: ${(props) => props.theme.colors.greyScales.veryLight};
  height: 200px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primaryColor};
`;

export const Header: FC<HeaderProps> = ({ title, smallDescription }) => {
  return (
    <StyledHeader width="100%" column center>
      <Title>{title}</Title>
      {smallDescription && <span>{smallDescription}</span>}
    </StyledHeader>
  );
};
