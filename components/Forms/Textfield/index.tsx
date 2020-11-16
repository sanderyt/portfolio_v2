import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { FieldError } from "react-hook-form";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type TextfieldProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  placeholder: string;
  error: FieldError;
  register?: () => RefReturn;
};

const TextfieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
`;

const Label = styled.span`
  color: ${props => `${props.theme.colors.primaryColor}`};
`;

const Input = styled.input`
  background-color: #eee;
  transition: ${props => `${props.theme.transition.ease}`};
  border: ${props =>
    props.error ? `1px solid ${props.theme.colors.red}` : `none`};
  outline: none;
  border-radius: ${props => `${props.theme.borderRadius.large}`};
  padding: 15px;
  font-size: 1rem;
`;

const Error = styled.span`
  color: ${props => `${props.theme.colors.red}`};
  font-size: ${props => `${props.theme.fontSizes.extraSmall}`};
`;

export const Textfield: FC<TextfieldProps> = ({
  name,
  placeholder,
  error,
  register
}) => {
  return (
    <TextfieldContainer>
      <Label>{name}</Label>
      <Input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        ref={register}
        error={error}
      />
      <Error error={error}>{error && error.message}</Error>
    </TextfieldContainer>
  );
};
