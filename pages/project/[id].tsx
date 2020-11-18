import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Layout } from "../../components/UI/Layout";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Header } from "../../components/UI/Header";

const Project = () => {
  return (
    <Layout>
      <Header title="Project naam" />
    </Layout>
  );
};

export default Project;
