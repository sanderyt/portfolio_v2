import React, { FC, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

import { FlexBox, FlexItem } from "react-styled-flex";

const StyledMenu = styled(FlexBox)`
  z-index: ${(props) => props.theme.layers.layer3};
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
      props.isOpen ? `translateY(0%) translateX(0%)` : `translateX(150%) translateY(-150%)`};
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

const Avatar = styled.img`
  height: 175px;
  border-radius: ${(props) => props.theme.borderRadius.round};
`;

type MenuProps = {
  isOpen: boolean;
};

export const Menu: FC<MenuProps> = ({ isOpen }) => {
  useEffect(() => {
    isOpen ? setTimeout(() => addNoScroll(), 200) : removeNoScroll();
  }, [isOpen]);

  const addNoScroll = (): void => {
    //To make it work for Safari mobile
    const scrollPosition = window.pageYOffset;

    document.body.classList.add("no-scroll");
    document.body.setAttribute("scrollPosition", `${scrollPosition}`);

    document.documentElement.setAttribute("scrollPosition", `${scrollPosition}`);
  };

  const removeNoScroll = (): void => {
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");

    const scrollPosition = document.body.getAttribute("scrollPosition");

    scrollPosition && window.scrollTo(0, parseInt(scrollPosition));
  };

  return (
    <StyledMenu center alignItems="center" justifyContent="space-between" column isOpen={isOpen}>
      <FlexItem alignItems="center" column flex={6} box>
        <h1>
          Sander van Rijsoort
          <span role="img" aria-label="helloIcon">
            👋
          </span>
        </h1>
        <h2>
          React developer
          <span role="img" aria-label="reactIcon">
            ⚛
          </span>
        </h2>
        <Avatar src="./images/sander_van_rijsoort.png" alt="Sander van Rijsoort" />
        <h3>
          Based in Amsterdam
          <span role="img" aria-label="dutchIcon">
            🇳🇱
          </span>
        </h3>
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
        <Copyright>With React(Next.js), TypeScript, Styled Components and GraphQL</Copyright>
      </Footer>
    </StyledMenu>
  );
};
