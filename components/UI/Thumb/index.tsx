import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

import { FlexBox, FlexItem } from "react-styled-flex";
import { fadeIn } from "../../../styles/keyframes";
import { Pill } from "../Pill";

type ThumbProps = {
  name: string;
  slug: string;
  thumb: string | string[];
  techs: string[];
};

const StyledThumb = styled(FlexItem)`
  animation: ${fadeIn} 1s forwards;
  height: auto;
  width: 400px;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.borderRadius.large};
  margin: ${(props) => props.theme.spacing.large};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.ease};

  &:hover {
    transform: translateY(-2%);
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 300px;
  border-top-left-radius: ${(props) => props.theme.borderRadius.large};
  border-top-right-radius: ${(props) => props.theme.borderRadius.large};
  object-fit: cover;
`;

const Details = styled(FlexBox)`
  background-color: ${(props) => props.theme.colors.greyScales.light};
  border-top: 5px solid ${(props) => props.theme.colors.primaryColor};
  width: 100%;
  height: auto;
  padding-bottom: ${(props) => props.theme.spacing.small};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.large};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.large};
`;

const Tech = styled(FlexBox)``;

const Name = styled.h3`
  text-align: center;
`;

export const Thumb: FC<ThumbProps> = ({ name, thumb, slug, techs }) => {
  return (
    <Link href={`/project/${slug}`}>
      <StyledThumb center column box>
        <StyledImage src={thumb as string} alt={name} width={400} height={300} />
        <Details column center>
          <Name>{name}</Name>
          <Tech wrap center>
            {techs &&
              techs.map((tech) => {
                return <Pill key={tech}>{tech}</Pill>;
              })}
          </Tech>
        </Details>
      </StyledThumb>
    </Link>
  );
};
