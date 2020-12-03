import React, { FC } from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { client } from "../../api/gqlClient";
import { ProjectSchema } from "../../types/typings";
import { getSingleProject } from "../../api/queries";
import { createMarkup } from "../../lib/util";

import { Layout } from "../../components/UI/Layout";
import { ProjectHeader } from "../../components/UI/ProjectHeader";
import { FlexBox } from "react-styled-flex";
import { device } from "../../styles/device";

type ProjectProps = {
  project: ProjectSchema;
};

const Content = styled(FlexBox)`
  color: ${(props) => props.theme.colors.greyScales.text};
  line-height: 1.75;

  & p {
    padding: ${(props) => `0 ${props.theme.spacing.small}`};
    text-align: justify;

    @media ${device.laptop} {
      padding: ${(props) => `0 ${props.theme.spacing.xl}`};
    }
  }

  & img {
    width: 100%;
    height: 325px;
    border-top: ${(props) => props.theme.borders.thinLine};
    border-bottom: ${(props) => props.theme.borders.thinLine};

    @media ${device.laptop} {
      width: 800px;
      height: 400px;
      box-shadow: ${(props) => props.theme.boxShadow};
      border-radius: ${(props) => props.theme.borderRadius.large};
      border-top: 5px solid ${(props) => props.theme.colors.primaryColor};
    }
  }
`;

const Project: FC<ProjectProps> = ({
  project: { title, description, tech, url, startDate, endDate },
}) => {
  return (
    <Layout>
      <ProjectHeader
        title={title}
        url={url}
        technologies={tech}
        startDate={startDate}
        endDate={endDate}
      />
      <Content center column dangerouslySetInnerHTML={createMarkup(description.html)}></Content>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  const variables = {
    id,
  };

  const response = client && (await client.request(getSingleProject, variables));
  const project = response.project;
  return {
    props: {
      project,
    },
  };
};

export default Project;
