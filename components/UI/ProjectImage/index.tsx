import React from "react";
import styled from "styled-components";

type ProjectImageProps = {
  url: string;
};

const StyledProjectImage = styled.img`
  width: 500px;
`;
export const ProjectImage: React.FC<ProjectImageProps> = ({ url }) => {
  return <StyledProjectImage src={url} />;
};
