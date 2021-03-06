import styled from "styled-components";
import { device } from "../../../styles/device";
import { fadeIn } from "../../../styles/keyframes";

import { FlexBox, FlexItem } from "react-styled-flex";

const StyledExperience = styled(FlexBox)`
  animation: ${fadeIn} 1s forwards;
  margin: ${(props) => props.theme.spacing.medium} 0;
`;

const Timeline = styled(FlexItem)`
  color: ${(props) => props.theme.colors.greyScales.text};
  padding-top: ${(props) => props.theme.spacing.small};
  border-left: 2px solid ${(props) => `${props.theme.colors.primaryColor}`};
  padding-bottom: ${(props) => props.theme.spacing.xl};
  position: relative;
  min-width: 80px;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};

  @media ${device.laptopL} {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  &:before {
    content: "";
    position: absolute;
    left: -8px;
    top: -2px;
    height: 15px;
    width: 15px;
    border-radius: ${(props) => props.theme.borderRadius.round};
    background-color: white;
    border: 4px solid ${(props) => `${props.theme.colors.primaryColor}`};
  }
`;

const Function = styled(FlexItem)`
  padding-bottom: ${(props) => props.theme.spacing.xl};
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.colors.greyScales.light};
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: ${(props) => props.theme.borderRadius.large};
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts.heading[0]};
  font-weight: bold;
  color: ${(props) => `${props.theme.colors.primaryColor}`};
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

const Company = styled.span`
  color: ${(props) => props.theme.colors.greyScales.text};
  font-family: ${(props) => props.theme.fonts.heading[0]};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

const Description = styled.span`
  line-height: 1.5;
  color: ${(props) => props.theme.colors.greyScales.text};
`;

export { StyledExperience, Timeline, Function, Title, Company, Description };
