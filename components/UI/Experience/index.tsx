import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type ExperienceProps = {
  children: ReactNode;
  date: string;
  title: string;
  company: string;
};

export const Experience: FC<ExperienceProps> = ({
  children,
  date,
  title,
  company
}) => {
  const Experience = styled.div`
    display: flex;
    animation: fadeIn 1s forwards;
  `;

  const ExperienceTimeline = styled.div`
    display: flex;
    flex: 1;
    color: #bfbfbf;
    padding-top: 6px;
    border-left: 2px solid ${props => `${props.theme.colors.primaryColor}`};
    justify-content: center;
    padding-bottom: 60px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: -9px;
      top: 6px;
      height: 10px;
      width: 10px;
      border-radius: 100px;
      background-color: white;
      border: 3px solid ${props => `${props.theme.colors.primaryColor}`};
    }
  `;

  const ExperienceFunction = styled.div`
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
  `;

  return (
    <Experience>
      <ExperienceTimeline>
        <span>{date}</span>
      </ExperienceTimeline>
      <ExperienceFunction>
        <Title>{title}</Title>
        <Company>{company}</Company>
        <Description>{children}</Description>
      </ExperienceFunction>
    </Experience>
  );
};
