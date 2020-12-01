import React, { FC } from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { client } from "../api/gqlClient";
import { getResume } from "../api/queries";
import { ResumeSchema } from "../types/typings";
import { createMarkup } from "../lib/util";

import { Layout } from "../components/UI/Layout";
import { Experience } from "../components/UI/Experience";
import { Header } from "../components/UI/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCertificate, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "react-styled-flex";

const Content = styled(FlexBox)`
  padding: ${(props) => props.theme.spacing.xl};

  @media only screen and (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.small};
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
        {work.map((work) => {
          return (
            <Experience
              company={work.organisation}
              startDate={work.startDate}
              endDate={work.endDate}
              title={work.title}
              key={work.id}
            >
              <div dangerouslySetInnerHTML={createMarkup(work.description.html)}></div>
            </Experience>
          );
        })}
        <h2>
          <FontAwesomeIcon icon={faCertificate} />
          Certificates
        </h2>
        {certificates.map((work) => {
          return (
            <Experience
              company={work.organisation}
              startDate={work.startDate}
              endDate={work.endDate}
              title={work.title}
              key={work.id}
            >
              <div dangerouslySetInnerHTML={createMarkup(work.description.html)}></div>
            </Experience>
          );
        })}
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} />
          Education
        </h2>
        {education.map((work) => {
          return (
            <Experience
              company={work.organisation}
              startDate={work.startDate}
              endDate={work.endDate}
              title={work.title}
              key={work.id}
            >
              <div dangerouslySetInnerHTML={createMarkup(work.description.html)}></div>
            </Experience>
          );
        })}
      </Content>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = client && (await client.request(getResume));

  const work = response.resumes.filter((element: ResumeSchema) => element.type === "Work");
  const certificates = response.resumes.filter(
    (element: ResumeSchema) => element.type === "Certifications"
  );
  const education = response.resumes.filter(
    (element: ResumeSchema) => element.type === "Education"
  );

  return {
    props: {
      work,
      certificates,
      education,
    },
  };
};

export default Resume;
