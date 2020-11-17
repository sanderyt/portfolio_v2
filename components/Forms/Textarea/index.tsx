import React, { FC, DetailedHTMLProps } from "react";
import styled from "styled-components";

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

const StyledTextarea = styled.textarea`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #eee;
  border: none;
  outline: none;
  border-radius: ${props => props.theme.borderRadius.large};
  padding: 15px;
  font-size: 1rem;
  margin-top: 25px;
  resize: none;
  height: 200px;
  margin-bottom: 15px;
`;

export const Textarea: FC<TextareaProps> = ({
  name,
  placeholder,
  error,
  register
}) => {
  return (
    <StyledTextarea
      name={name}
      id={name}
      placeholder={placeholder}
      ref={register}
    />
  );
};
