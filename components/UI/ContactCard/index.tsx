import React, { FC } from "react";
import styled from "styled-components";
import { fadeIn } from "../../../styles/keyframes";

import { FlexBox, FlexItem } from "react-styled-flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const StyledContactCard = styled(FlexBox)`
  width: 80%;
  cursor: pointer;
  margin: ${(props) => props.theme.spacing.small};
  height: 75px;
  animation: ${fadeIn} 1s forwards;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.borderRadius.large};
  transition: ${(props) => props.theme.transition.ease};
`;

const Icon = styled(FlexItem)`
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const Text = styled(FlexItem)`
  background-color: ${(props) => props.theme.colors.greyScales.light};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.large};
  border-top-right-radius: ${(props) => props.theme.borderRadius.large};
  height: 100%;
`;

const Type = styled.span`
  color: ${(props) => props.theme.colors.greyScales.text};
  margin-bottom: ${(props) => props.theme.spacing.normal};
`;

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
