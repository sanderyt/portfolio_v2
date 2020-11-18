import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { client } from "../gql/gqlClient";
import { gql } from "graphql-request";

import { Layout } from "../components/UI/Layout";
import { Thumb } from "../components/UI/Thumb";
import { Header } from "../components/UI/Header";
import { Project } from "../lib/types";
import { title } from "process";

type ProjectsProps = {
  projects: Project[];
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
  const query = gql`
    query getProjects {
      projects {
        title
        slug
        tech
        description {
          html
        }
        projectImages {
          url
        }
      }
    }
  `;
  const { projects } = await client.request(query);
  return {
    props: {
      projects
    }
  };
};

export default Projects;
