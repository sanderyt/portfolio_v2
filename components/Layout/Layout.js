import React from "react";

import Menu from "../Menu/Menu";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__menu">
        <Menu />
      </div>
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;
