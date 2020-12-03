import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import moment from "moment";
import { Col, Row, Container } from "styled-bootstrap-grid";
import { FlexBox } from "react-styled-flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button";
import { Pill } from "../Pill";
import { device } from "../../../styles/device";

type ProjectHeaderProps = {
  title: string;
  url: string;
  technologies: string[];
  startDate: string;
  endDate: string;
};

const StyledContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.greyScales.light};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: ${(props) => props.theme.fontSizes.medium};

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

const Detail = styled.span`
  color: ${(props) => props.theme.colors.greyScales.text};
`;

export const ProjectHeader: FC<ProjectHeaderProps> = ({
  title,
  url,
  technologies,
  startDate,
  endDate,
}) => {
  return (
    <StyledContainer fluid>
      <Row>
        <Col lg={6} md={12}>
          <FlexBox column justifyContent="center" height="auto" padding="8px 16px">
            <Title>{title}</Title>
            <Detail>Built with</Detail>
            <FlexBox wrap>
              {technologies.map((technology, index) => {
                return <Pill key={technology + index}>{technology}</Pill>;
              })}
            </FlexBox>
            <FlexBox column padding="16px 0 0 0 ">
              <Detail>Project date</Detail>
              <span>
                {moment(startDate).format("DD MMMM, YYYY")} -{" "}
                {moment(endDate).format("DD MMMM, YYYY")}{" "}
              </span>
            </FlexBox>
          </FlexBox>
        </Col>
        {url && (
          <Col lg={6} md={12}>
            <FlexBox column justifyContent="center" height="100%">
              <Link href={url}>
                <a target="_blank">
                  <Button isLoading={false} isSubmit={false}>
                    See live
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </Button>
                </a>
              </Link>
            </FlexBox>
          </Col>
        )}
      </Row>
    </StyledContainer>
  );
};
