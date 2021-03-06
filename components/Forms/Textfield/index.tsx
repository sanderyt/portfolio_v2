import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { labelToSentence } from "../../../lib/util";

import { FlexBox } from "react-styled-flex";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type TextfieldProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  name: string;
  placeholder: string;
  error: Error;
  register?: () => RefReturn;
};

type InputProps = {
  readonly isError: Error;
};

const TextfieldContainer = styled(FlexBox)`
  margin: ${(props) => `${props.theme.spacing.small} 0`};
`;

const Label = styled.span`
  color: ${(props) => props.theme.colors.primaryColor};
`;

const Input = styled.input<InputProps>`
  background-color: ${(props) => props.theme.colors.greyScales.medium};
  transition: ${(props) => props.theme.transition.ease};
  border: ${(props) => (props.isError ? `1px solid ${props.theme.colors.red}` : `none`)};
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius.large};
  padding: ${(props) => props.theme.spacing.small};
`;

const Error = styled.span`
  color: ${(props) => `${props.theme.colors.red}`};
  font-size: ${(props) => `${props.theme.fontSizes.extraSmall}`};
`;

export const Textfield: FC<TextfieldProps> = ({ name, placeholder, error, register }) => {
  return (
    <TextfieldContainer column>
      <Label>{labelToSentence(name)}</Label>
      <Input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        ref={register}
        isError={error}
      />
      <Error>{error && labelToSentence(error.message)}</Error>
    </TextfieldContainer>
  );
};
