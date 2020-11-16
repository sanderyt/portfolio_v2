import React from "react";

export const Textarea = ({ handleChange, name }) => {
  return (
    <textarea
      className="textarea"
      onChange={handleChange}
      id={name}
      placeholder={name}
    ></textarea>
  );
};
