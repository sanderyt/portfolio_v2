import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";

import { Textfield } from "../Textfield";
import { Button } from "../../UI/Button";
import { Textarea } from "../Textarea";
import { FlexBox } from "react-styled-flex";
import { ContactFormInput } from "../../../types/typings";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const Form = styled(FlexBox)``;

export const Contactform = (): JSX.Element => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ContactFormInput): void => console.log(data);

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)} as="form" column>
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
      <Button isLoading={false} isSubmit>
        Send
        <FontAwesomeIcon icon={faPaperPlane} />
      </Button>
    </Form>
  );
};
