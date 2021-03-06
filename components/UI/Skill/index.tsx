import React, { FC } from "react";

import { StyledSkill, Language, SkillPoint } from "./styles";
import { FlexItem, FlexBox } from "react-styled-flex";

interface Props {
  language: string;
  points: number;
  years: number;
}

export const Skill: FC<Props> = ({ language, points }) => {
  const elements = [1, 2, 3, 4, 5];
  return (
    <StyledSkill center>
      <FlexItem flex={1}>
        <Language>{language}</Language>
      </FlexItem>
      <FlexItem flex={3}>
        <FlexBox>
          {elements.map((skillPoint) => {
            return <SkillPoint key={skillPoint} active={points >= skillPoint} />;
          })}
        </FlexBox>
      </FlexItem>
    </StyledSkill>
  );
};
