const withSass = require("@zeit/next-sass");
module.exports = withSass({});

const withGraphql = require("next-plugin-graphql");
module.exports = withGraphql();

module.exports = {
  images: {
    domains: ["media.graphcms.com"],
  },
};
