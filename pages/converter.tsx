import React, { FC } from "react";
import { Layout } from "../components/UI/Layout";
import { Header } from "../components/UI/Header";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { FlexBox } from "react-styled-flex";
import { Convertorform } from "../components/Forms/Convertorform";

const Converter: FC = () => {
  return (
    <Layout>
      <Header title="Microsoft Office Keys Converter" />
      <Container fluid>
        <Row>
          <Col lg={12}>
            <FlexBox center>
              <Convertorform />
            </FlexBox>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Converter;
