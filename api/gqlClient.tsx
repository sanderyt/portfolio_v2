import { GraphQLClient } from "graphql-request";

const endpoint = process.env.GRAPHCMS_ENDPOINT;

export const client = endpoint && new GraphQLClient(endpoint, { headers: {} });
