import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import moment from "moment";
import { device } from "../../../styles/device";
import { fadeIn } from "../../../styles/keyframes";

import { FlexBox, FlexItem } from "react-styled-flex";

type ExperienceProps = {
  children: ReactNode;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
};

const StyledExperience = styled(FlexBox)`
  animation: ${fadeIn} 1s forwards;
  margin: ${props => props.theme.spacing.medium} 0;
`;

const Timeline = styled(FlexItem)`
  color: ${props => props.theme.colors.greyScales.text};
  padding-top: ${props => props.theme.spacing.small};
  border-left: 2px solid ${props => `${props.theme.colors.primaryColor}`};
  padding-bottom: ${props => props.theme.spacing.xl};
  position: relative;
  min-width: 80px;
  font-size: ${props => props.theme.fontSizes.extraSmall};

  @media ${device.laptopL} {
    font-size: ${props => props.theme.fontSizes.small};
  }

  &:before {
    content: "";
    position: absolute;
    left: -8px;
    top: -2px;
    height: 15px;
    width: 15px;
    border-radius: ${props => props.theme.borderRadius.round};
    background-color: white;
    border: 4px solid ${props => `${props.theme.colors.primaryColor}`};
  }
`;

const Function = styled(FlexItem)`
  padding-bottom: ${props => props.theme.spacing.xl};
`;

const Title = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: bold;
  color: ${props => `${props.theme.colors.primaryColor}`};
  margin-bottom: ${props => props.theme.spacing.small};
`;

const Company = styled.span`
  color: ${props => props.theme.colors.greyScales.text};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.small};
  margin-bottom: ${props => props.theme.spacing.small};
`;

const Description = styled.span`
  line-height: 1.5;
  color: ${props => props.theme.colors.greyScales.text};
`;

export const Experience: FC<ExperienceProps> = ({
  children,
  startDate,
  endDate,
  title,
  company
}) => {
  return (
    <StyledExperience>
      <Timeline flex={1} box justifyContent="center">
        <FlexBox column alignItems="center">
          <span>{moment(startDate).format("MMM, YYYY")}</span>
          <span>-</span>
          <span>
            {moment(endDate).isAfter()
              ? "Now"
              : moment(endDate).format("MMM, YYYY")}
          </span>
        </FlexBox>
      </Timeline>
      <Function flex={6} box column>
        <Title>{title}</Title>
        <Company>{company}</Company>
        <Description>{children}</Description>
      </Function>
    </StyledExperience>
  );
};
