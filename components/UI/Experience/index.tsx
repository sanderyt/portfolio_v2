import React, { FC, ReactNode } from "react";
import moment from "moment";

import { FlexBox } from "react-styled-flex";
import { StyledExperience, Timeline, Function, Title, Company, Description } from "./styles";

interface ExperienceProps {
  children: ReactNode;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
}

export const Experience: FC<ExperienceProps> = ({
  children,
  startDate,
  endDate,
  title,
  company,
}) => {
  return (
    <StyledExperience>
      <Timeline flex={1} box justifyContent="center">
        <FlexBox column alignItems="center">
          <span>{moment(startDate).format("MMM, YYYY")}</span>
          <span>-</span>
          <span>{moment(endDate).isAfter() ? "Now" : moment(endDate).format("MMM, YYYY")}</span>
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
