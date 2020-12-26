import React, { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";
import { FlexBox, FlexItem } from "react-styled-flex";
import { device } from "../../../styles/device";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const StyledMenu = styled(FlexBox)`
  z-index: ${(props) => props.theme.layers.layer4};
  background-color: ${(props) => props.theme.colors.greyScales.veryLight};
  box-shadow: ${(props) => props.theme.boxShadow};
  position: fixed;
  width: 400px;
  transition: ${(props) => props.theme.transition.ease};
  min-height: -webkit-fill-available;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: 100%;
    transform: ${(props) =>
      props.$isOpen ? `translateY(0%) translateX(0%)` : `translateX(150%) translateY(-150%)`};
  }
`;

const NavigationItem = styled(FlexBox)`
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

const Footer = styled(FlexItem)`
  margin-bottom: ${(props) => props.theme.spacing.normal};
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.colors.greyScales.text};
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  text-align: center;
`;

const Avatar = styled(Image)`
  height: 100px;
  width: 100px;
  border-radius: ${(props) => props.theme.borderRadius.round};
  margin: ${(props) => `${props.theme.spacing.normal} 0`};

  @media ${device.laptop} {
    height: 200px;
    width: 200px;
  }
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding-top: 30px;
  margin-bottom: 0;

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

const Subheading = styled.h2`
  color: ${(props) => props.theme.colors.greyScales.text};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-bottom: 0;

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

const Icons = styled(FlexBox)`
  padding: ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: ${(props) => props.theme.transition.ease};
  color: ${(props) => props.theme.colors.greyScales.text};

  &:hover {
    color: ${(props) => props.theme.colors.primaryColor};
  }
`;

type MenuProps = {
  isOpen: boolean;
};

export const Menu: FC<MenuProps> = ({ isOpen }) => {
  useEffect(() => {
    isOpen ? setTimeout(() => addNoScroll(), 200) : removeNoScroll();
  }, [isOpen]);

  const addNoScroll = (): void => {
    document.body.classList.add("no-scroll");
  };

  const removeNoScroll = (): void => {
    document.body.classList.remove("no-scroll");
  };

  const githubIcon = faGithub as IconProp;
  const linkedInIcon = faLinkedin as IconProp;
  const facebookIcon = faFacebook as IconProp;

  return (
    <StyledMenu center alignItems="center" justifyContent="space-between" column $isOpen={isOpen}>
      <FlexItem alignItems="center" column flex={6} box>
        <Heading>Sander van Rijsoort</Heading>
        <Subheading>React developer</Subheading>
        <Avatar
          src="/images/sander_van_rijsoort.png"
          alt="Sander van Rijsoort"
          height={200}
          width={200}
        />
        <Icons>
          <Link href="https://github.com/sanderyt">
            <a target="_blank">
              <Icon icon={githubIcon} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/sander-van-rijsoort-335418140/">
            <a target="_blank">
              <Icon icon={linkedInIcon} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/sander.vanrijsoort">
            <a target="_blank">
              <Icon icon={facebookIcon} />
            </a>
          </Link>
        </Icons>
      </FlexItem>
      <FlexItem width="100%" flex={3}>
        <FlexBox width="100%" column>
          <Link href="/">
            <NavigationItem center as="li">
              Home
            </NavigationItem>
          </Link>
          <Link href="/projects">
            <NavigationItem center as="li">
              Projects
            </NavigationItem>
          </Link>
          <Link href="/resume">
            <NavigationItem center as="li">
              Resume
            </NavigationItem>
          </Link>
          <Link href="/blog">
            <NavigationItem center as="li">
              Blog
            </NavigationItem>
          </Link>
          <Link href="/contact">
            <NavigationItem center as="li">
              Contact
            </NavigationItem>
          </Link>
        </FlexBox>
      </FlexItem>
      <Footer box flex={1} column justifyContent="flex-end">
        <Copyright>
          Theme made by my, code{" "}
          <a href="https://github.com/sanderyt/portfolio_v2" target="_blank" rel="noreferrer">
            here
          </a>
        </Copyright>
        <Copyright>With React, TypeScript, Styled Components and GraphQL</Copyright>
      </Footer>
    </StyledMenu>
  );
};
