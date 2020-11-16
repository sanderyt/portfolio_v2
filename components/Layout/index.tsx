import React from "react";

import { Menu } from "../Menu";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__menu">
        <Menu />
      </div>
      <div className="layout__content">{children}</div>
    </div>
  );
};
