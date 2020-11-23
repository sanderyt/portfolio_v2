import { GraphQLClient } from "graphql-request";
require("dotenv").config();

const endpoint = process.env.GRAPHCMS_ENDPOINT;

export const client = new GraphQLClient(endpoint, { headers: {} });
