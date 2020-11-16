import React from "react";

export const Experience = ({ children, date, title, company }) => {
  return (
    <div className="experience">
      <div className="experience__timeline">
        <span>{date}</span>
      </div>
      <div className="experience__function">
        <span className="title">{title}</span>
        <span className="company">{company}</span>
        <span className="description">{children}</span>
      </div>
    </div>
  );
};
