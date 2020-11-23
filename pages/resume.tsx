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

  @media only screen and (max-width: 768px) {
    padding: ${props => props.theme.spacing.small};
  }
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
        {work.map(work => {
          function createMarkup() {
            return { __html: work.description.html };
          }
          return (
            <Experience
              company={work.organisation}
              startDate={work.startDate}
              endDate={work.endDate}
              title={work.title}
              key={work.id}
            >
              <div dangerouslySetInnerHTML={createMarkup()}></div>
            </Experience>
          );
        })}
        <h2>
          <FontAwesomeIcon icon={faCertificate} />
          Certificates
        </h2>
        {certificates.map(work => {
          function createMarkup() {
            return { __html: work.description.html };
          }
          return (
            <Experience
              company={work.organisation}
              startDate={work.startDate}
              endDate={work.endDate}
              title={work.title}
              key={work.id}
            >
              <div dangerouslySetInnerHTML={createMarkup()}></div>
            </Experience>
          );
        })}
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} />
          Education
        </h2>
        {education.map(work => {
          function createMarkup() {
            return { __html: work.description.html };
          }
          return (
            <Experience
              company={work.organisation}
              startDate={work.startDate}
              endDate={work.endDate}
              title={work.title}
              key={work.id}
            >
              <div dangerouslySetInnerHTML={createMarkup()}></div>
            </Experience>
          );
        })}
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
