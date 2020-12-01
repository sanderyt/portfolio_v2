import React, { useState, FC, ReactNode } from "react";
import styled from "styled-components";
import { FlexBox } from "react-styled-flex";
import { device } from "../../../styles/device";

import { Menu } from "../Menu";
import { Container, Row } from "styled-bootstrap-grid";
import { Hamburger } from "../Hamburger";

type LayoutProps = {
  children: ReactNode;
};

const Content = styled(FlexBox)`
  width: calc(100% - 400px);
  position: absolute;
  right: 0;
  width: 100%;

  @media ${device.laptop} {
    width: calc(100% - 400px);
  }
`;

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => setIsOpen(!isOpen);

  return (
    <Container fluid>
      <Row>
        <Menu isOpen={isOpen} />
        <Hamburger clickHandler={toggleMenu} isOpen={isOpen} />
        <Content center wrap>
          {children}
        </Content>
      </Row>
    </Container>
  );
};
