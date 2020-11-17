import React, { FC } from "react";
import { GetServerSideProps } from "next";

import { Layout } from "../components/UI/Layout";
import { Thumb } from "../components/UI/Thumb";
import { Header } from "../components/UI/Header";

type ProjectsProps = {
  projects: Object[];
};

const Projects: FC<ProjectsProps> = () => {
  return (
    <Layout>
      <Header title="Projects" />
    </Layout>
  );
};

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   return {
//     props: {}
//   };
// };

export default Projects;
