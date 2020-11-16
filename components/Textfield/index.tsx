import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";

import "./textfield.scss";

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
  register?: () => RefReturn;
};

export const Textfield: FC<TextfieldProps> = ({
  name,
  placeholder,
  register
}) => {
  return (
    <div className="textfield">
      <span>{name}</span>
      <input type="text" id={name} placeholder={placeholder} ref={register} />
    </div>
  );
};
