import React from "react";

import { Menu } from "../Menu";
import { Container, Row } from "styled-bootstrap-grid";

export const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Menu />
        {children}
      </Row>
    </Container>
  );
};
