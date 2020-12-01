import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

import { FlexBox, FlexItem } from "react-styled-flex";
import { fadeIn } from "../../../styles/keyframes";

type ThumbProps = {
  name: string;
  id: number;
  thumb: string;
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

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: ${(props) => props.theme.borderRadius.large};
  object-fit: cover;
`;

const Details = styled(FlexBox)`
  background-color: ${(props) => props.theme.colors.greyScales.light};
  border-top: 5px solid ${(props) => props.theme.colors.primaryColor};
  width: 100%;
  height: 100px;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.large};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.large};
`;

const Name = styled.h3``;

export const Thumb: FC<ThumbProps> = ({ name, id, thumb }) => {
  return (
    <Link href={`/project/${id}`}>
      <StyledThumb center column box>
        <Image src={thumb} alt={name} />
        <Details column center>
          <Name>{name}</Name>
        </Details>
      </StyledThumb>
    </Link>
  );
};
