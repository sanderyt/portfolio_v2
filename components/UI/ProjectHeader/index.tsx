import React, { FC } from "react";
import styled from "styled-components";

import { Col, Row, Container } from "styled-bootstrap-grid";
import { FlexBox } from "react-styled-flex";
import { Button } from "../Button";
import Link from "next/link";
import { Pill } from "../../Pill";

type ProjectHeaderProps = {
  title: string;
  url: string;
  technologies: string[];
};

const StyledContainer = styled(Container)`
  background-color: ${props => props.theme.colors.greyScales.light};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primaryColor};
`;

export const ProjectHeader: FC<ProjectHeaderProps> = ({
  title,
  url,
  technologies
}) => {
  return (
    <StyledContainer fluid>
      <Row>
        <Col lg={6} md={12}>
          <FlexBox column justifyContent="center" height="225px">
            <Title>{title}</Title>
            <span>Built with</span>
            <FlexBox wrap>
              {technologies.map(technology => {
                return <Pill>{technology}</Pill>;
              })}
            </FlexBox>
            <span>Date worked on</span>
          </FlexBox>
        </Col>
        <Col lg={6} md={12}>
          <FlexBox column center height="225px">
            <Link href={url}>
              <a target="_blank">
                <Button>See live</Button>
              </a>
            </Link>
          </FlexBox>
        </Col>
      </Row>
    </StyledContainer>
  );
};
