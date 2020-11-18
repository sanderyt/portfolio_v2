import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledContactCard = styled.div`
  display: flex;
  width: 80%;
  cursor: pointer;
  margin-top: 25px;
  height: 75px;
  animation: fadeIn 1s forwards;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px #aaa;
  border-radius: 10px;
  transition: 500ms;
`;

const Icon = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  & .fa-phone,
  .fa-home {
    color: ${props => `${props.theme.colors.primaryColor}`};
    font-size: ${props => `${props.theme.fontSizes.medium}`};
  }
`;

const Text = styled.div`
  background-color: #f7f7f7;
  border-bottom-right-radius: 5px;
  align-items: center;
  border-top-right-radius: 5px;
  height: 100%;
  display: flex;
  flex: 3;
  justify-content: center;
  flex-direction: column;
  & .type {
    color: #adadad;
    margin-bottom: 5px;
  }
`;

export const ContactCard = ({ icon, text, type }) => {
  return (
    <StyledContactCard>
      <Icon>
        <FontAwesomeIcon icon={faHome} />
      </Icon>
      <Text>
        <span className="type">{type}</span>
        <span>{text}</span>
      </Text>
    </StyledContactCard>
  );
};
