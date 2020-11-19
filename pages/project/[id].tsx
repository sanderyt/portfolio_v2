import React, { FC } from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { client } from "../../gql/gqlClient";
import { ProjectSchema } from "../../lib/types";
import { getSingleProject } from "../../gql/queries";

import { Layout } from "../../components/UI/Layout";
import { Header } from "../../components/UI/Header";
import { Button } from "../../components/UI/Button";

type ProjectProps = {
  project: ProjectSchema;
};

const Content = styled.div`
  color: ${props => props.theme.colors.greyScales.text};
  line-height: 1.75;
  padding: ${props => props.theme.spacing.xl};
`;

const Project: FC<ProjectProps> = ({ project }) => {
  const { title, description, slug, tech, projectImages } = project;
  function createMarkup() {
    return { __html: description.html };
  }
  return (
    <Layout>
      <Header
        title={title}
        smallDescription={`This project was built using ${tech}`}
      >
        <Button>Live in production</Button>
      </Header>
      <Content dangerouslySetInnerHTML={createMarkup()}></Content>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.query;

  const variables = {
    id
  };

  const { project } = await client.request(getSingleProject, variables);
  return {
    props: {
      project
    }
  };
};

export default Project;
