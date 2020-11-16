import React from "react";

import { Menu } from "../Menu";
import { Container, Row, Col } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Menu />
        </Col>
        <Col md={9}>{children}</Col>
      </Row>
    </Container>
  );
};
