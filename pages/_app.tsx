import { Theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

const fetch = require("node-fetch").default;

const client = new ApolloClient({
  uri:
    "https://api-eu-central-1.graphcms.com/v2/ckhme4sza59pa01whgdli6slc/master",
  fetch,
  cache: new InMemoryCache()
});

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    </ApolloProvider>
  );
}

export default MyApp;
