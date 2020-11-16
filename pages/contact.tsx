import React from "react";

import { Layout } from "../components/UI/Layout";
import { ContactCard } from "../components/UI/ContactCard";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Contactform } from "../components/Forms/Contactform";

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={6}>
            <Contactform />
          </Col>
          <Col md={6}>
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
