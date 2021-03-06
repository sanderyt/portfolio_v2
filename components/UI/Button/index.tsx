import React, { FC, ReactNode } from "react";
import { StyledButton } from "./styles";

import { Spinner } from "../Spinner";

type ButtonProps = {
  children: ReactNode;
  isLoading: boolean;
  isSubmit?: boolean;
};

export const Button: FC<ButtonProps> = ({ children, isSubmit, isLoading }) => {
  return (
    <StyledButton type={isSubmit ? "submit" : "button"} isLoading={isLoading} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </StyledButton>
  );
};
