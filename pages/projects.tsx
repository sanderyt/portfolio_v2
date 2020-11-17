import React, { useEffect, useState } from "react";

import { Layout } from "../components/UI/Layout";
import { Thumb } from "../components/UI/Thumb";
import { Header } from "../components/UI/Header";
import { GetServerSideProps } from "next";

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
      <Header />
      <div className="projects">
        {projects &&
          projects.map(project => {
            return <Thumb {...project} />;
          })}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  return {
    props: {}
  };
};

export default Projects;
