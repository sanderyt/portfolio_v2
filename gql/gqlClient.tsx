import { GraphQLClient } from "graphql-request";

const endpoint =
  "https://api-eu-central-1.graphcms.com/v2/ckhme4sza59pa01whgdli6slc/master";

export const client = new GraphQLClient(endpoint, { headers: {} });
