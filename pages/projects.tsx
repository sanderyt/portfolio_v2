import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { client } from "../gql/gqlClient";
import { getProjects } from "../gql/queries";

import { Layout } from "../components/UI/Layout";
import { Thumb } from "../components/UI/Thumb";
import { Header } from "../components/UI/Header";
import { ProjectSchema } from "../lib/types";

type ProjectsProps = {
  projects: ProjectSchema[];
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <Layout>
      <Header title="Projects" />
      {projects.map(project => {
        const { title, id, slug, tech } = project;
        return (
          <Thumb
            name={title}
            id={id}
            slug={slug}
            tech={tech}
            thumb={project.projectImages.url as string}
          />
        );
      })}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { projects } = await client.request(getProjects);
  return {
    props: {
      projects
    }
  };
};

export default Projects;
