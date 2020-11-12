import React, { useState } from "react";

const InputField = ({ name, handleChange }) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("Hi");

  const checkEmpty = e => {
    const { value } = e.target;
    if (value.length === 0) {
      setError(true);
      setMessage("This field is empty.");
    } else {
      setError(false);
    }
  };

  return (
    <div className="input-field">
      <input
        type="text"
        id={name}
        placeholder={name}
        onChange={handleChange}
        onBlur={checkEmpty}
      />
      <span
        className={error ? "input-field__error actived" : "input-field__error"}
      >
        {message}
      </span>
    </div>
  );
};

export default InputField;
