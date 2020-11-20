import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { device } from "../../../styles/device";

type ExperienceProps = {
  children: ReactNode;
  date: string;
  title: string;
  company: string;
};

const StyledExperience = styled.div`
  display: flex;
  animation: fadeIn 1s forwards;
  margin: ${props => props.theme.spacing.medium} 0;
`;

const Timeline = styled.div`
  display: flex;
  flex: 1;
  color: #bfbfbf;
  padding-top: 6px;
  border-left: 2px solid ${props => `${props.theme.colors.primaryColor}`};
  justify-content: center;
  padding-bottom: 60px;
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

const Function = styled.div`
  display: flex;
  flex: 6;
  flex-direction: column;
  padding-bottom: 60px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${props => `${props.theme.colors.primaryColor}`};
  margin-bottom: 10px;
`;

const Company = styled.span`
  color: #bfbfbf;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.span`
  line-height: 1.5;
  color: ${props => props.theme.colors.greyScales.text};
`;

export const Experience: FC<ExperienceProps> = ({
  children,
  date,
  title,
  company
}) => {
  return (
    <StyledExperience>
      <Timeline>
        <span>{date}</span>
      </Timeline>
      <Function>
        <Title>{title}</Title>
        <Company>{company}</Company>
        <Description>{children}</Description>
      </Function>
    </StyledExperience>
  );
};
