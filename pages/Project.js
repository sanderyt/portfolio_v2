import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../components/Layout/Layout";
import Row from "../components/Row/Row";
import Column from "../components/Column/Column";
import Container from "../components/Container/Container";
import ImageGallery from "../components/ImageGallery/ImageGallery";

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
          <Column>
            {project && (
              <div>
                <p>{project.description[0]}</p>
                <p>{project.description[1]}</p>
              </div>
            )}
          </Column>
          <Column>{project && <ImageGallery images={project.images} />}</Column>
        </Row>
      </Container>
    </Layout>
  );
};

export default Project;
