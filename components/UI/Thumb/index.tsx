import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

type ThumbProps = {
  name: string;
  tech: string;
  slug: string;
  id: number;
  thumb: string;
};

const Container = styled.div`
  height: auto;
  width: 400px;
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  margin-top: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  animation: fadeIn 1s forwards;
  transition: $transition;
`;

const Image = styled.div``;

const Details = styled.div`
  background-color: #f7f7f7;
  border-top: 5px solid $primary-color;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
  flex-direction: column;
`;

export const Thumb: FC<ThumbProps> = ({ name, tech, slug, id, thumb }) => {
  return (
    <Link href={`/project?id=${id}`}>
      <div className="thumb">
        <div className="thumb__image">
          <img src={thumb} alt={name} className="image" />
        </div>
        <div className="thumb__details">
          <h3>{name}</h3>
          <span>Built with {tech}</span>
        </div>
      </div>
    </Link>
  );
};
