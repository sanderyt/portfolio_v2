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
