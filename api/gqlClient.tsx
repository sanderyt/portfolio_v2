import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const client = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/ckhme4sza59pa01whgdli6slc/master",
  { headers: {} }
);
