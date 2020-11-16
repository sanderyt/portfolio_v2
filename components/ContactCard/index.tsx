import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

export const ContactCard = ({ icon, text, type }) => {
  return (
    <div className="contact-card">
      <div className="contact-card__icon">
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className="contact-card__text">
        <span className="type">{type}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};
