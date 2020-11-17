import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Textfield } from "../Textfield";
import { Button } from "../../UI/Button";
import { Textarea } from "../Textarea";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required()
});

export const Contactform = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <h1>Get in touch</h1>
      <Textfield
        name="name"
        placeholder="Please enter your name"
        register={register}
        error={errors.name}
      />
      <Textfield
        name="email"
        placeholder="Please enter an e-mail"
        register={register}
        error={errors.email}
      />
      <Textarea
        name="message"
        placeholder="Type your message"
        register={register}
        error={errors.message}
      />
      <Button isSubmit>
        <FontAwesomeIcon icon={faPaperPlane} />
        Send
      </Button>
    </form>
  );
};
