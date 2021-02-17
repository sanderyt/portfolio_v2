import { gql } from "graphql-request";

export const getSingleProject = gql`
  query getSingleProject($slug: String) {
    project(where: { slug: $slug }) {
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
    projects(orderBy: startDate_DESC) {
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
    resumes(orderBy: startDate_DESC) {
      id
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
