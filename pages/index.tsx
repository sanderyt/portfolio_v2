import { FC } from "react";
import styled from "styled-components";
import { NextSeo } from "next-seo";

import { Layout } from "../components/UI/Layout";
import { FlexBox } from "react-styled-flex";
import { Button } from "../components/UI/Button";
import { device } from "../styles/device";
import Div100vh from "react-div-100vh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { tada } from "../styles/keyframes";
import Link from "next/link";
import Image from "next/image";

const Overlay = styled(Div100vh)`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: ${(props) => props.theme.layers.layer2};
`;

const Content = styled(Div100vh)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  background-size: cover;
`;

const Fold = styled(FlexBox)`
  width: 90%;
  padding: ${(props) => props.theme.spacing.large};
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: ${(props) => props.theme.borderRadius.large};
  z-index: ${(props) => props.theme.layers.layer3};
  color: ${(props) => props.theme.colors.primaryColor};
  animation: ${tada} 1000ms ease;

  @media ${device.laptop} {
    width: 700px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.medium};

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

const Subheading = styled.h3`
  color: ${(props) => props.theme.colors.greyScales.text};
  text-align: center;
  line-height: 1.5;
  font-size: ${(props) => props.theme.fontSizes.extraSmall};

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

const Home: FC = () => (
  <Layout>
    <NextSeo
      title="React developer from Amsterdam"
      description="My name is Sander van Rijsoort and have been a React developer for almost 2 years. Let's work together!"
    />
    <Overlay />
    <Content>
      <Image src="/images/background-image-home.jpg" layout="fill" />
      <Fold center column>
        <Heading>Hi, my name is Sander van Rijsoort</Heading>
        <Subheading>
          I love building front-ends with React, Next.js, JavaScript, TypeScript, GraphQL, Vue...
        </Subheading>
        <FlexBox>
          <Link href="/projects">
            <a>
              <Button isLoading={false} isSubmit={false}>
                Check my work
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Button>
            </a>
          </Link>
          <Link href="/resume">
            <a>
              <Button isLoading={false} isSubmit={false}>
                Check my resume
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Button>
            </a>
          </Link>
        </FlexBox>
      </Fold>
    </Content>
  </Layout>
);

export default Home;
