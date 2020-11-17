import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Layout } from "../../components/UI/Layout";
import { Container, Row, Col } from "styled-bootstrap-grid";

const Project = () => {
  const [project, setProject] = useState(null);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetch("../data.json")
      .then(response => {
        return response.json();
      })
      .then(({ projects }) => {
        projects.forEach(project => {
          project.id == id && setProject(project);
        });
      });
  }, []);

  return (
    <Layout>
      {project && (
        <div className="project__heading">
          <h2>{project.name}</h2>
          <span>{project.info}</span>
          <span>{project.tech}</span>
          <button className="btn btn--primary btn--medium">See live</button>
        </div>
      )}
      <Container>
        <Row>
          <Col>
            {project && (
              <div>
                <p>{project.description[0]}</p>
                <p>{project.description[1]}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Project;
