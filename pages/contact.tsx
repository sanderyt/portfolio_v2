import React, { FC } from "react";

import { Layout } from "../components/UI/Layout";
import { ContactCard } from "../components/UI/ContactCard";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { FlexBox } from "react-styled-flex";
import { Contactform } from "../components/Forms/Contactform";
import { Header } from "../components/UI/Header";
import { NextSeo } from "next-seo";

const Contact: FC = () => {
  return (
    <Layout>
      <NextSeo
        title="Contact | React developer from Amsterdam"
        description="My name is Sander van Rijsoort and have been a React developer for almost 2 years. Let's work together!"
      />
      <Header title="Contact" />
      <Container fluid>
        <Row>
          <Col lg={6} noGutter={true}>
            <FlexBox center column>
              <Contactform />
            </FlexBox>
          </Col>
          <Col lg={6} noGutter={true}>
            <FlexBox center column height="100%">
              <ContactCard text="+31 6 43 49 93 41" type="Telephone" />
              <ContactCard text="s.rijsoort@gmail.com" type="Email" />
              <ContactCard text="Amsterdam, NL" type="City" />
            </FlexBox>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Contact;
