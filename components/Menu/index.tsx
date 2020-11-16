import React from "react";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__top">
        <h1>Sander van Rijsoort</h1>
        <h2>Front-end developer</h2>
        <h3>Image here</h3>
      </div>
      <div className="menu__navigation">
        <ul className="nav">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/projects">
            <li>Projects</li>
          </Link>
          <Link href="/resume">
            <li>Resume</li>
          </Link>
          <Link href="/about">
            <li>About me</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="menu__footer">
        <span>Theme made by me :)</span>
      </div>
    </div>
  );
};
