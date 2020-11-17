import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { FlexBox, FlexItem } from "react-styled-flex";
import { Button } from "../Button";

const StyledMenu = styled(FlexBox)`
  z-index: ${props => props.theme.layers.layer2};
  background-color: ${props => props.theme.colors.greyScales.veryLight};
  box-shadow: ${props => props.theme.boxShadow};
  position: fixed;
  width: 400px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NavigationItem = styled(FlexBox)`
  cursor: pointer;
  list-style: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: ${props => props.theme.spacing.small} 0;
  transition: ${props => props.theme.transition.ease};

  &:hover {
    background-color: ${props => props.theme.colors.greyScales.light};
    color: ${props => props.theme.colors.primaryColor};
    border-right: 5px solid ${props => props.theme.colors.primaryColor};
  }
`;

const Footer = styled(FlexItem)`
  margin-bottom: ${props => props.theme.spacing.normal};
`;

const Copyright = styled.span`
  color: ${props => props.theme.colors.greyScales.medium};
`;

export const Menu = () => {
  return (
    <StyledMenu
      center
      alignItems="center"
      justifyContent="space-between"
      column
      height="100vh"
    >
      <FlexItem alignItems="center" column flex={6} box>
        <h1>Sander van Rijsoort 👋</h1>
        <h2>React developer ⚛ </h2>
        <h3>Based in Amsterdam 🇳🇱</h3>
        <h3>Currently working remote in 🇵🇹</h3>
        <Button>Get in touch</Button>
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
        <Copyright>Theme made by me 🔨</Copyright>
        <Copyright>The content is from an API also made by me 🚀</Copyright>
      </Footer>
    </StyledMenu>
  );
};
