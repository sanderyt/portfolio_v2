import React from "react";
import styled from "styled-components";

import { Menu } from "../Menu";
import { Container, Row, Col } from "styled-bootstrap-grid";

const Content = styled.div`
  width: calc(100% - 400px);
  position: absolute;
  right: 0;
`;

export const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Menu />
        <Content>{children}</Content>
      </Row>
    </Container>
  );
};
