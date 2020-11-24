import React, { FC, DetailedHTMLProps } from "react";
import styled from "styled-components";

import { FlexBox } from "react-styled-flex";
import { labelToSentence } from "../../../lib/util";

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

const StyledTextarea = styled(FlexBox)``;

const Input = styled.textarea`
  width: 300px;
  background-color: ${props => props.theme.colors.greyScales.medium};
  border: ${props =>
    props.error ? `1px solid ${props.theme.colors.red}` : `none`};
  outline: none;
  border-radius: ${props => props.theme.borderRadius.large};
  padding: ${props => props.theme.spacing.small};
  resize: none;
  height: 200px;
`;

const Label = styled.span`
  color: ${props => props.theme.colors.primaryColor};
`;

const Error = styled.span`
  color: ${props => `${props.theme.colors.red}`};
  font-size: ${props => `${props.theme.fontSizes.extraSmall}`};
`;

export const Textarea: FC<TextareaProps> = ({
  name,
  placeholder,
  error,
  register
}) => {
  return (
    <StyledTextarea column>
      <Label>{labelToSentence(name)}</Label>
      <Input
        name={name}
        id={name}
        placeholder={placeholder}
        ref={register}
        error={error}
      />
      <Error error={error}>{error && labelToSentence(error.message)}</Error>
    </StyledTextarea>
  );
};
