import { gql } from "graphql-request";

export const getSingleProject = gql`
  query getSingleProject($id: ID!) {
    project(where: { id: $id }) {
      id
      title
      url
      startDate
      endDate
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
      url
      startDate
      endDate
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

export const getResume = gql`
  query getResume {
    resumes {
      title
      type
      organisation
      description {
        html
      }
      startDate
      endDate
    }
  }
`;
