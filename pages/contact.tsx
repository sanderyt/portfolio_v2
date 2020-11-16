import React from "react";
import { useForm } from "react-hook-form";

import { Layout } from "../components/Layout";
import { ContactCard } from "../components/ContactCard";
import { Textfield } from "../components/Textfield";
import { Button } from "../components/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Contactform } from "../components/Forms/Contactform";

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Contactform />
          </Col>
          <Col>
            <ContactCard
              text="+31 6 43 49 93 41"
              type="Telephone"
              icon="phone"
            />
            <ContactCard text="s.rijsoort@gmail.com" type="Email" icon="mail" />
            <ContactCard text="Amsterdam, NL" type="City" icon="home" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Contact;
