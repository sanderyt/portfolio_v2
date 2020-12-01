import { FC } from "react";

import { Layout } from "../components/UI/Layout";

const Home: FC = () => (
  <Layout>
    <h1>
      Hi, I am <span>Sander van Rijsoort.</span> I get in a flow by writing code.
    </h1>
    <h2>Based in Amsterdam. Lets build together.</h2>
    <span>Maybe particle system here</span>
  </Layout>
);

export default Home;
