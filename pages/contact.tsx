import React from "react";

import { Layout } from "../components/UI/Layout";
import { ContactCard } from "../components/UI/ContactCard";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { FlexBox } from "react-styled-flex";
import { Contactform } from "../components/Forms/Contactform";

const Contact = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col lg={6} noGutter={true}>
            <FlexBox center column>
              <Contactform />
            </FlexBox>
          </Col>
          <Col lg={6} noGutter={true}>
            <FlexBox center column>
              <ContactCard
                text="+31 6 43 49 93 41"
                type="Telephone"
                icon="phone"
              />
              <ContactCard
                text="s.rijsoort@gmail.com"
                type="Email"
                icon="mail"
              />
              <ContactCard text="Amsterdam, NL" type="City" icon="home" />
            </FlexBox>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Contact;
