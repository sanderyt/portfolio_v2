import React, { ReactNode, FC } from "react";

import { StyledBox } from "./styles";

type BoxProps = {
  children: ReactNode;
};

export const Box: FC<BoxProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};
