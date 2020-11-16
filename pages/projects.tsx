import React, { useEffect, useState } from "react";

import { Layout } from "../components/UI/Layout";
import { Thumb } from "../components/UI/Thumb";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    //make this async later
    fetch("../data.json")
      .then(response => {
        return response.json();
      })
      .then(response => {
        setProjects(response.projects);
      });
  }, []);

  return (
    <Layout>
      <h1>Projects</h1>
      <div className="projects">
        {projects &&
          projects.map(project => {
            return <Thumb {...project} />;
          })}
      </div>
    </Layout>
  );
};

export default Projects;
