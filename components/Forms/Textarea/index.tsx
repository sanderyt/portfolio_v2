import React, { FC, DetailedHTMLProps } from "react";
import styled from "styled-components";
import { labelToSentence } from "../../../lib/util";

import { FlexBox } from "react-styled-flex";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type TextareaProps = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  placeholder: string;
  error: Error;
  register: () => RefReturn;
};

interface InputProps {
  readonly isError: Error;
}

const StyledTextarea = styled(FlexBox)`
  margin: ${(props) => `${props.theme.spacing.small} 0`};
`;

const Input = styled.textarea<InputProps>`
  width: 100%;
  background-color: ${(props) => props.theme.colors.greyScales.medium};
  border: ${(props) => (props.isError ? `1px solid ${props.theme.colors.red}` : `none`)};
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius.large};
  padding: ${(props) => props.theme.spacing.small};
  resize: none;
  height: 200px;
`;

const Label = styled.span`
  color: ${(props) => props.theme.colors.primaryColor};
`;

const Error = styled.span`
  color: ${(props) => `${props.theme.colors.red}`};
  font-size: ${(props) => `${props.theme.fontSizes.extraSmall}`};
`;

export const Textarea: FC<TextareaProps> = ({ name, placeholder, error, register }) => {
  return (
    <StyledTextarea column>
      <Label>{labelToSentence(name)}</Label>
      <Input name={name} id={name} placeholder={placeholder} ref={register} isError={error} />
      <Error>{error && labelToSentence(error.message)}</Error>
    </StyledTextarea>
  );
};
