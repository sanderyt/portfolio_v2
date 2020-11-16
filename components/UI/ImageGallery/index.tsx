import React, { useState } from "react";

export const ImageGallery = ({ images }) => {
  const [idx, setIdx] = useState(0);

  const nextImage = () => {
    setIdx(idx + 1);
  };

  const previousImage = () => {
    setIdx(idx - 1);
  };

  return (
    <div className="gallery">
      <div className="gallery__left" onClick={previousImage}>
        left
      </div>
      <img src={images[idx]} alt="image" className="main-image" />
      <div className="gallery__right" onClick={nextImage}>
        right
      </div>
    </div>
  );
};
