import React, { FC } from "react";
import styled from "styled-components";

import { FlexBox, FlexItem } from "react-styled-flex";
import { Col, Row, Container } from "styled-bootstrap-grid";

type ProjectDetailsProps = {};

const StyledCol = styled(Col)`
  height: 225px;
`;

const Details = styled(FlexBox)`
  background-color: ${props => props.theme.colors.greyScales.light};
`;
export const ProjectDetails: FC<ProjectDetailsProps> = ({}) => {
  return (
    <Container fluid>
      <Row>
        <StyledCol md={6} sm={12}>
          <Details column alignItems="center" height="100%">
            <h2>Project details</h2>
          </Details>
        </StyledCol>
        <StyledCol md={6} sm={12}>
          <FlexBox column alignItems="center" height="100%">
            <h1>Hello</h1>
          </FlexBox>
        </StyledCol>
      </Row>
    </Container>
  );
};
