import React, { useState } from "react";

import InputField from "../InputField/InputField";
import TextArea from "../Textarea/Textarea";

const Form = () => {
  const [input, setInput] = useState({});

  const handleSubmit = event => {
    console.log("hi");
  };

  const handleChange = event => {};
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <InputField name="Name" handleChange={handleChange} />
        <InputField name="Email" handleChange={handleChange} />
        <TextArea name="Message" handleChange={handleChange} />
        <input
          type="submit"
          value="Send message"
          className="btn btn--primary"
        />
      </form>
    </div>
  );
};

export default Form;
