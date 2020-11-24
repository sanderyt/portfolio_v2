import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const client = new GraphQLClient(endpoint, { headers: {} });
