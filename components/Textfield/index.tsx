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
  type: string;
  register?: () => RefReturn;
};

export const Textfield: FC<TextfieldProps> = ({
  name,
  placeholder,
  type,
  register
}) => {
  return (
    <div className="textfield">
      <input type={type} id={name} placeholder={placeholder} ref={register} />
    </div>
  );
};
