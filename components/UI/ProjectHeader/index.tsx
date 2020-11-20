import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import moment from "moment";
import { Col, Row, Container } from "styled-bootstrap-grid";
import { FlexBox } from "react-styled-flex";

import { Button } from "../Button";
import { Pill } from "../Pill";

type ProjectHeaderProps = {
  title: string;
  url: string;
  technologies: string[];
  startDate: string;
  endDate: string;
};

const StyledContainer = styled(Container)`
  background-color: ${props => props.theme.colors.greyScales.light};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primaryColor};
`;

const Detail = styled.span`
  color: ${props => props.theme.colors.greyScales.text};
`;

export const ProjectHeader: FC<ProjectHeaderProps> = ({
  title,
  url,
  technologies,
  startDate,
  endDate
}) => {
  return (
    <StyledContainer fluid>
      <Row>
        <Col lg={6} md={12}>
          <FlexBox
            column
            justifyContent="center"
            height="225px"
            padding="0 0 0 48px"
          >
            <Title>{title}</Title>
            <Detail>Built with</Detail>
            <FlexBox wrap>
              {technologies.map(technology => {
                return <Pill>{technology}</Pill>;
              })}
            </FlexBox>
            <FlexBox column>
              <Detail>Project date</Detail>
              <span>
                {moment(startDate).format("DD MMMM, YYYY")} -{" "}
                {moment(endDate).format("DD MMMM, YYYY")}{" "}
              </span>
            </FlexBox>
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
