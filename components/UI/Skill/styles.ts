import styled from "styled-components";
import { FlexBox, FlexItem } from "react-styled-flex";

interface SkillPointProps {
  active: boolean;
}

const StyledSkill = styled(FlexBox)``;

const Language = styled(FlexItem)`
  color: ${({ theme }) => theme.colors.greyScales.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: ${({ theme }) => theme.spacing.micro} 0;
`;

const SkillPoint = styled.div`
  width: 50px;
  height: 15px;
  background-color: ${(p: SkillPointProps) => (p.active ? "#06B49A" : "#ccc")};
  margin: 0 ${({ theme }) => theme.spacing.normal};
`;

export { StyledSkill, Language, SkillPoint };
