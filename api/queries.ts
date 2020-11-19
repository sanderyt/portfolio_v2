import { gql } from "graphql-request";

export const getSingleProject = gql`
  query getSingleProject($id: ID!) {
    project(where: { id: $id }) {
      id
      title
      slug
      tech
      description {
        html
      }
      projectImages {
        url
      }
    }
  }
`;

export const getProjects = gql`
  query getProjects {
    projects {
      id
      title
      slug
      tech
      description {
        html
      }
      projectImages {
        url
      }
    }
  }
`;
