import React, { FC, useState } from "react";
import styled from "styled-components";

import { FlexBox } from "react-styled-flex";
import { device } from "../../../styles/device";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type ImageGalleryProps = {
  images: string[];
};

const StyledImageGallery = styled(FlexBox)`
  position: relative;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-top: ${(props) => props.theme.spacing.large};
  border-radius: 5px;
  border-top: 5px solid ${(props) => props.theme.colors.primaryColor};
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 5px;

  @media ${device.laptop} {
    height: 400px;
    width: 400px;
    width: auto;
  }
`;

const RoundButton = styled.button`
  height: 50px;
  width: 50px;
  cursor: pointer;
  position: absolute;
  color: ${(props) => props.theme.colors.greyScales.text};
  top: 45%;
  background-color: white;
  outline: none;
  border: ${(props) => props.theme.borders.thinLine};
  border-radius: ${(props) => props.theme.borderRadius.round};
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: ${(props) => props.theme.transition.ease};

  &:hover {
    color: ${(props) => props.theme.colors.primaryColor};
  }
`;

const PreviousButton = styled(RoundButton)`
  left: ${(props) => props.theme.spacing.small};
`;

const NextButton = styled(RoundButton)`
  right: ${(props) => props.theme.spacing.small};
`;

export const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  const [idx, setIdx] = useState(0);

  const previousImage = (): void => {
    idx === 0 ? setIdx(images.length - 1) : setIdx(idx + -1);
  };

  const nextImage = (): void => {
    idx === images.length - 1 ? setIdx(0) : setIdx(idx + 1);
  };

  return (
    <StyledImageGallery>
      <PreviousButton onClick={previousImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </PreviousButton>
      <Image src={images[idx]} />
      <NextButton onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </NextButton>
    </StyledImageGallery>
  );
};
