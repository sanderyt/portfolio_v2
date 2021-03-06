import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { StyledContactCard, Icon, Text, Type } from "./styles";

type ContactCardProps = {
  text: string;
  type: string;
};

export const ContactCard: FC<ContactCardProps> = ({ text, type }) => {
  const renderIcon = (): IconDefinition => {
    if (type === "Telephone") return faPhone;
    if (type === "Email") return faEnvelope;
    if (type === "City") return faHome;
    return faPhone;
  };

  return (
    <StyledContactCard center>
      <Icon box justifyContent="center" flex={1}>
        <FontAwesomeIcon icon={renderIcon()} />
      </Icon>
      <Text box center flex={3} column>
        <Type>{type}</Type>
        <span>{text}</span>
      </Text>
    </StyledContactCard>
  );
};
