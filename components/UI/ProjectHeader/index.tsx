import React, { FC } from "react";
import styled from "styled-components";
import { device } from "../../../styles/device";
import moment from "moment";
import { Col, Row, Container } from "styled-bootstrap-grid";
import { FlexBox } from "react-styled-flex";

import { Pill } from "../Pill";
import { Box } from "../Box";

type ProjectHeaderProps = {
  title: string;
  url: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  backgroundImage: string | string[];
};

interface StyledContainerProps {
  backgroundImage: string;
}

const StyledContainer = styled(Container)`
  background-image: url(${(props: StyledContainerProps) => props.backgroundImage || ""});
  object-fit: contain;
  position: relative;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.layers.layer2};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 0;

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

const Detail = styled.span`
  color: ${(props) => props.theme.colors.greyScales.text};
`;

const Content = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const ProjectHeader: FC<ProjectHeaderProps> = ({
  title,
  // url,
  technologies,
  startDate,
  endDate,
  backgroundImage,
}) => {
  return (
    <StyledContainer fluid backgroundImage={backgroundImage as string}>
      <Overlay />
      <Row>
        <Content sm={12}>
          <Box>
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
                  {moment(endDate).isBefore() ? moment(endDate).format("DD MMMM, YYYY") : "Now"}
                </span>
              </FlexBox>
            </FlexBox>
          </Box>
        </Content>
      </Row>
    </StyledContainer>
  );
};
