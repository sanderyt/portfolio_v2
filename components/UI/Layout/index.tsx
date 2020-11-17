import React from "react";

import { Menu } from "../Menu";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Header } from "../Header";

export const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col lg={3} hiddenLgDown={true} noGutter={true}>
          <Menu />
        </Col>
        <Col lg={9} md={12} noGutter={true}>
          <Header />
          {children}
        </Col>
      </Row>
    </Container>
  );
};
