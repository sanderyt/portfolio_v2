import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { Textfield } from "../Textfield";
import { Button } from "../../UI/Button";

export const Contactform = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
      <Button isSubmit>
        <FontAwesomeIcon icon={faPaperPlane} />
        Send
      </Button>
    </form>
  );
};
