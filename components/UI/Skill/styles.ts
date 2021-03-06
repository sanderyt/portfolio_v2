import styled from "styled-components";
import { FlexBox, FlexItem } from "react-styled-flex";

export const StyledSkill = styled(FlexBox)``;

export const Language = styled(FlexItem)`
  color: ${(props) => props.theme.colors.greyScales.text};
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin: ${(props) => props.theme.spacing.micro} 0;
`;

interface SkillPointProps {
  active: boolean;
}

export const SkillPoint = styled.div`
  width: 50px;
  height: 15px;
  background-color: ${(p: SkillPointProps) => (p.active ? "#06B49A" : "#ccc")};
  margin: 0 ${(props) => props.theme.spacing.normal};
`;

export const Years = styled.span`
  margin-left: ${(props) => props.theme.spacing.small};
  font-size: 10px;
`;
