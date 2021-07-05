import styled from "styled-components";
import { FlexBox, FlexItem } from "react-styled-flex";

interface SkillPointProps {
  active: boolean;
}

const StyledSkill = styled(FlexBox)`
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.micro} 0;
`;

const Language = styled(FlexItem)`
  color: ${({ theme }) => theme.colors.greyScales.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.micro};
  font-weight: 700;
`;

const SkillPoint = styled.div`
  width: 50px;
  height: 15px;
  background-color: ${(p: SkillPointProps) => (p.active ? "#06B49A" : "#ccc")};
  margin: 0 ${({ theme }) => theme.spacing.micro};

  &:first-child {
    margin-left: 0;
  }
`;

export { StyledSkill, Language, SkillPoint };
