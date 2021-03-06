import React, { FC } from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { client } from "../api/gqlClient";
import { getResume } from "../api/queries";
import { ResumeSchema } from "../types/typings";
import { createMarkup } from "../lib/util";

import { Col, Row } from "styled-bootstrap-grid";
import { Layout } from "../components/UI/Layout";
import { Experience } from "../components/UI/Experience";
import { Header } from "../components/UI/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCertificate,
  faGraduationCap,
  faDownload,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "react-styled-flex";
import { device } from "../styles/device";
import { NextSeo } from "next-seo";
import { Button } from "../components/UI/Button";
import { Skill } from "../components/UI/Skill";

const Content = styled(FlexBox)`
  padding: ${(props) => props.theme.spacing.small};

  @media ${device.tablet} {
    padding: ${(props) => props.theme.spacing.xl};
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
      <NextSeo title="Resume | React developer from Amsterdam" description="Check out my resume." />
      <Header title="Resume" />
      <Content column>
        <a href="./cv_sander_van_rijsoort_30june2021.pdf" target="_blank">
          <Button isLoading={false}>
            <FontAwesomeIcon icon={faDownload} />
            Download CV in PDF
          </Button>
        </a>
        <h2>
          <FontAwesomeIcon icon={faCode} />
          Skills
        </h2>
        <Row>
          <Col md={6}>
            <Skill language="JavaScript" points={4} />
            <Skill language="TypeScript" points={4} />
            <Skill language="React" points={4} />
            <Skill language="Redux" points={4} />
            <Skill language="Next.js" points={4} />
            <Skill language="React Native" points={2} />
          </Col>
          <Col md={6}>
            <Skill language="Vue" points={3} />
            <Skill language="Vuex" points={3} />
            <Skill language="Nuxt" points={3} />
            <Skill language="Node.js" points={2} />
            <Skill language="WordPress" points={3} />
            <Skill language="C#" points={3} />
          </Col>
        </Row>
        <h2>
          <FontAwesomeIcon icon={faBriefcase} />
          Experience
        </h2>
        {work.map(({ organisation, startDate, endDate, title, id, description }: ResumeSchema) => {
          return (
            <Experience
              company={organisation}
              startDate={startDate}
              endDate={endDate}
              title={title}
              key={id}
            >
              <div dangerouslySetInnerHTML={createMarkup(description.html)}></div>
            </Experience>
          );
        })}
        <h2>
          <FontAwesomeIcon icon={faCertificate} />
          Certificates
        </h2>
        {certificates.map(
          ({ organisation, startDate, endDate, title, id, description }: ResumeSchema) => {
            return (
              <Experience
                company={organisation}
                startDate={startDate}
                endDate={endDate}
                title={title}
                key={id}
              >
                <div dangerouslySetInnerHTML={createMarkup(description.html)}></div>
              </Experience>
            );
          }
        )}
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} />
          Education
        </h2>
        {education.map(
          ({ organisation, startDate, endDate, title, id, description }: ResumeSchema) => {
            return (
              <Experience
                company={organisation}
                startDate={startDate}
                endDate={endDate}
                title={title}
                key={id}
              >
                <div dangerouslySetInnerHTML={createMarkup(description.html)}></div>
              </Experience>
            );
          }
        )}
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
