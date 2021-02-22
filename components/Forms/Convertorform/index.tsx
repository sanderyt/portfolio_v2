import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";

import { Button } from "../../UI/Button";
import { Textarea } from "../Textarea";
import { FlexBox } from "react-styled-flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { ContactFormInput } from "../../../types/typings";

const schema = yup.object().shape({
  message: yup.string().required(),
});

const Form = styled(FlexBox)`
  width: 75%;
`;

export const Convertorform = (): JSX.Element => {
  const [convertedKeys, useConvertedKeys] = useState<string[] | null>(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ContactFormInput): void => {
    const keys = data.message
      .split("Microsoft Office Pro Plus 2019 Retail (PHONE Activation):       ")
      .map((key) => key.trim());
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useConvertedKeys(keys);
  };

  return (
    <>
      <FlexBox column center width="100%">
        <Form noValidate onSubmit={handleSubmit(onSubmit)} as="form" column>
          <Textarea
            name="message"
            placeholder="Type your message"
            register={register}
            error={errors.message}
          />
          <Button isLoading={false} isSubmit>
            <FontAwesomeIcon icon={faExchangeAlt} />
            Convert
          </Button>
        </Form>
        <FlexBox center column>
          {convertedKeys &&
            convertedKeys.length > 0 &&
            convertedKeys.map((licenseKey) => {
              return <span key={licenseKey}>{licenseKey}</span>;
            })}
        </FlexBox>
      </FlexBox>
    </>
  );
};
