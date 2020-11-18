import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

import { FlexBox, FlexItem } from "react-styled-flex";

type ThumbProps = {
  name: string;
  tech: string;
  slug: string;
  id: number;
  thumb: string;
};

const StyledThumb = styled(FlexItem)`
  height: auto;
  width: 400px;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius.large};
  margin-top: 50px;
  cursor: pointer;
  animation: fadeIn 1s forwards;
  transition: ${props => props.theme.transition.ease};
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: ${props => props.theme.borderRadius.large};
  object-fit: contain;
`;

const Details = styled(FlexBox)`
  background-color: #f7f7f7;
  border-top: 5px solid ${props => props.theme.colors.primaryColor};
  width: 100%;
  height: 100px;
  border-bottom-left-radius: ${props => props.theme.borderRadius.large};
  border-bottom-right-radius: ${props => props.theme.borderRadius.large};
`;

const Name = styled.h3``;
const Tech = styled.span``;

export const Thumb: FC<ThumbProps> = ({ name, tech, slug, id, thumb }) => {
  return (
    <Link href={`/project/${slug}`}>
      <StyledThumb center column box>
        <Image src={thumb} alt={name} />
        <Details column alignItems="center">
          <Name>{name}</Name>
          <Tech>Built with {tech}</Tech>
        </Details>
      </StyledThumb>
    </Link>
  );
};
