import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCertificate,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FlexBox } from "react-styled-flex";
import { GetServerSideProps } from "next";
import { client } from "../api/gqlClient";

import { Layout } from "../components/UI/Layout";
import { Experience } from "../components/UI/Experience";
import { Header } from "../components/UI/Header";
import { getResume } from "../api/queries";
import { ResumeSchema } from "../lib/types";

const Content = styled(FlexBox)`
  padding: ${props => props.theme.spacing.xl};
`;

type ResumeProps = {
  work: ResumeSchema[];
  certificates: ResumeSchema[];
  education: ResumeSchema[];
};

const Resume: FC<ResumeProps> = ({ work, certificates, education }) => {
  return (
    <Layout>
      <Header title="Resume" />
      <Content column>
        <h2>
          <FontAwesomeIcon icon={faBriefcase} />
          Experience
        </h2>
      </Content>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { resumes } = await client.request(getResume);

  const work = resumes.filter(element => element.type === "Work");
  const certificates = resumes.filter(
    element => element.type === "Certifications"
  );
  const education = resumes.filter(element => element.type === "Education");

  return {
    props: {
      work,
      certificates,
      education
    }
  };
};

export default Resume;
