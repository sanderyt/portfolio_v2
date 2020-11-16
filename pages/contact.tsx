import React from "react";

import { Layout } from "../components/Layout";
import { ContactCard } from "../components/ContactCard";
import { Textfield } from "../components/Textfield";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="contact__form">
          <h1>Form!!</h1>
        </div>
        <div className="contact__cards">
          <ContactCard text="+31 6 43 49 93 41" type="Telephone" icon="phone" />
          <ContactCard text="hello@react-dev.nl" type="Email" icon="mail" />
          <ContactCard text="Amsterdam, NL" type="City" icon="home" />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
