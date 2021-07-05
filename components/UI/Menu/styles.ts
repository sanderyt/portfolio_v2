import styled from "styled-components";
import Image from "next/image";
import { device } from "../../../styles/device";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexBox, FlexItem } from "react-styled-flex";

export const StyledMenu = styled(FlexBox)`
  z-index: ${(props) => props.theme.layers.layer6};
  background-color: ${(props) => props.theme.colors.greyScales.veryLight};
  box-shadow: ${(props) => props.theme.boxShadow};
  position: fixed;
  width: 400px;
  transition: ${(props) => props.theme.transition.ease};
  min-height: -webkit-fill-available;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    transform: ${(props) =>
      props.$isOpen ? `translateY(0%) translateX(0%)` : `translateX(150%) translateY(-150%)`};
  }
`;

export const NavigationItem = styled(FlexBox)`
  cursor: pointer;
  list-style: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: ${(props) => props.theme.spacing.small} 0;
  transition: ${(props) => props.theme.transition.ease};

  &:hover {
    background-color: ${(props) => props.theme.colors.greyScales.light};
    color: ${(props) => props.theme.colors.primaryColor};
    border-right: 5px solid ${(props) => props.theme.colors.primaryColor};
  }
`;

export const Footer = styled(FlexItem)`
  margin-bottom: ${(props) => props.theme.spacing.normal};
`;

export const Copyright = styled.span`
  color: ${(props) => props.theme.colors.greyScales.text};
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  text-align: center;
`;

export const Avatar = styled(Image)`
  height: 100px;
  width: 100px;
  border-radius: ${(props) => props.theme.borderRadius.round};
  margin: ${(props) => `${props.theme.spacing.normal} 0`};

  @media ${device.laptop} {
    height: 100px;
    width: 100px;
  }
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: 0;

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

export const Subheading = styled.h2`
  color: ${(props) => props.theme.colors.greyScales.text};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-bottom: 0;

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

export const Icons = styled(FlexBox)`
  padding-top: ${(props) => props.theme.spacing.small};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: ${(props) => props.theme.transition.ease};
  color: ${(props) => props.theme.colors.greyScales.text};

  &:hover {
    color: ${(props) => props.theme.colors.primaryColor};
  }
`;
