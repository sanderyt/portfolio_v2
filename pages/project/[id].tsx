import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { gql } from "graphql-request";
import { client } from "../../gql/gqlClient";
import { ProjectSchema } from "../../lib/types";

import { Layout } from "../../components/UI/Layout";
import { Header } from "../../components/UI/Header";

type ProjectProps = {
  project: ProjectSchema;
};

const Project: FC<ProjectProps> = ({ project }) => {
  const { title, description, slug, tech, projectImages } = project;
  return (
    <Layout>
      <Header
        title={title}
        smallDescription={`This project was built using ${tech}`}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.query;
  const query = gql`
    query getSingleProject($id: ID!) {
      project(where: { id: $id }) {
        id
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

  const variables = {
    id
  };

  const { project } = await client.request(query, variables);
  return {
    props: {
      project
    }
  };
};

export default Project;
