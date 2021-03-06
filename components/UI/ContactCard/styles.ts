import styled from "styled-components";
import { fadeIn } from "../../../styles/keyframes";

import { FlexBox, FlexItem } from "react-styled-flex";

export const StyledContactCard = styled(FlexBox)`
  width: 80%;
  cursor: pointer;
  margin: ${(props) => props.theme.spacing.small};
  height: 75px;
  animation: ${fadeIn} 1s forwards;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.borderRadius.large};
  transition: ${(props) => props.theme.transition.ease};
`;

export const Icon = styled(FlexItem)`
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Text = styled(FlexItem)`
  background-color: ${(props) => props.theme.colors.greyScales.light};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.large};
  border-top-right-radius: ${(props) => props.theme.borderRadius.large};
  height: 100%;
`;

export const Type = styled.span`
  color: ${(props) => props.theme.colors.greyScales.text};
  margin-bottom: ${(props) => props.theme.spacing.normal};
`;
