import React, { FC } from "react";
import styled from "styled-components";

import { FlexBox } from "react-styled-flex";

type HeaderProps = {
  title: string;
  smallDescription?: string;
};

const StyledHeader = styled(FlexBox)`
  background: rgb(6, 180, 154);
  background: linear-gradient(90deg, rgba(6, 180, 154, 1) 0%, rgba(247, 247, 247, 1) 100%);
  height: 200px;
`;

const Title = styled.h1`
  color: white;
`;

export const Header: FC<HeaderProps> = ({ title, smallDescription }) => {
  return (
    <StyledHeader width="100%" column center>
      <Title>{title}</Title>
      {smallDescription && <span>{smallDescription}</span>}
    </StyledHeader>
  );
};
