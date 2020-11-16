import React from "react";
import { useForm } from "react-hook-form";
import { Textfield } from "../../Textfield";
import { Button } from "../../Button";

export const Contactform = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form>
      <h1>Get in touch</h1>
      <Textfield
        name="Name"
        placeholder="Please enter your name"
        register={register}
      />
      <Textfield
        name="Email"
        placeholder="Please enter an e-mail"
        register={register}
      />
      <Textfield
        name="Name"
        placeholder="Please enter your name"
        register={register}
      />
      <Button>Send 👉</Button>
    </form>
  );
};
