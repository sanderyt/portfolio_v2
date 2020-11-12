import React from "react";

const Textarea = ({ handleChange, name }) => {
  return (
    <textarea
      className="textarea"
      onChange={handleChange}
      id={name}
      placeholder={name}
    ></textarea>
  );
};

export default Textarea;
