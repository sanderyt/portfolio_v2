import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { FlexBox } from "react-styled-flex";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 2;
  background-color: #fcfcfc;
  justify-content: space-between;
  height: 100vh;
  box-shadow: $box-shadow;
`;

const Top = styled.div`
  display: flex;
  flex: 6;
  flex-direction: column;
  align-items: center;
`;

const StyledNavigation = styled.div`
  display: flex;
  flex: 3;
  width: 100%;
`;

const Navigation = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const NavigationItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  list-style: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 15px 0;
  transition: $transition;
  &:hover {
    background-color: #f7f7f7;
    color: $primary-color;
    border-left: 5px solid $primary-color;
  }
`;

const Footer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 8px;
`;

const Copyright = styled.span`
  color: #ccc;
`;

export const Menu = () => {
  return (
    <StyledMenu center alignItems="center" justifyContent="space-between">
      <Top alignItems="center" column>
        <h1>Sander van Rijsoort 👋</h1>
        <h2>React developer ⚛ </h2>
        <h3>Based in Amsterdam 🇳🇱</h3>
        <h3>Currently working remote in 🇵🇹</h3>
      </Top>
      <StyledNavigation>
        <Navigation>
          <Link href="/">
            <NavigationItem>Home</NavigationItem>
          </Link>
          <Link href="/projects">
            <NavigationItem>Projects</NavigationItem>
          </Link>
          <Link href="/resume">
            <NavigationItem>Resume</NavigationItem>
          </Link>
          <Link href="/about">
            <NavigationItem>About</NavigationItem>
          </Link>
          <Link href="/contact">
            <NavigationItem>Contact</NavigationItem>
          </Link>
        </Navigation>
      </StyledNavigation>
      <Footer>
        <Copyright>Theme made by me 🔨 </Copyright>
        <Copyright>The content is from an API also made by me 🚀 </Copyright>
      </Footer>
    </StyledMenu>
  );
};
