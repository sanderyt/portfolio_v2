import React, { FC, useEffect } from "react";
import Link from "next/link";

import { FlexBox, FlexItem } from "react-styled-flex";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import {
  StyledMenu,
  Heading,
  Subheading,
  Avatar,
  Icons,
  Icon,
  NavigationItem,
  Footer,
  Copyright,
} from "./styles";

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
          height={125}
          width={125}
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
