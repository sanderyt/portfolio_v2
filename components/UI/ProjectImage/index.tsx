import React, { FC } from "react";
import styled from "styled-components";

type ProjectImageProps = {
  url: string;
};

const StyledProjectImage = styled.img`
  width: 500px;
`;
export const ProjectImage: FC<ProjectImageProps> = ({ url }) => {
  return <StyledProjectImage src={url} />;
};
