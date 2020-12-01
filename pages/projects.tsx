import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { client } from "../api/gqlClient";
import { getProjects } from "../api/queries";
import { ProjectSchema } from "../types/typings";

import { Layout } from "../components/UI/Layout";
import { Thumb } from "../components/UI/Thumb";
import { Header } from "../components/UI/Header";

type ProjectsProps = {
  projects: ProjectSchema[];
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <Layout>
      <Header title="Projects" />
      {projects &&
        projects.map(({ title, id, projectImages }: ProjectSchema) => {
          return <Thumb name={title} id={id} thumb={projectImages[0].url as string} key={id} />;
        })}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = client && (await client.request(getProjects));
  const projects = response && response.projects;
  return {
    props: {
      projects,
    },
  };
};

export default Projects;
