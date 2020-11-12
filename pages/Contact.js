import React from "react";

import Layout from "../components/Layout/Layout";
import ContactCard from "../components/ContactCard/ContactCard";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="contact__form">
           <Form />
        </div>
        <div className="contact__cards">
          <ContactCard text="+31 6 43 49 93 41" type="Telephone" icon="phone" />
          <ContactCard text="s.rijsoort@gmail.com" type="Email" icon="mail" />
          <ContactCard text="Amsterdam, NL" type="City" icon="home" />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
