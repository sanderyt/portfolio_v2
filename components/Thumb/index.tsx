import React from "react";
import Link from "next/link";

export const Thumb = ({ name, tech, slug, id, thumb }) => {
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
