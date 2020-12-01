import { FC } from "react";
import { NextSeo } from "next-seo";

import { Layout } from "../components/UI/Layout";

const Home: FC = () => (
  <Layout>
    <NextSeo
      title="React developer from Amsterdam"
      description="My name is Sander van Rijsoort and have been a React developer for almost 2 years. Let's work together!"
    />
    <h1>
      Hi, I am <span>Sander van Rijsoort.</span> I get in a flow by writing code.
    </h1>
    <h2>Based in Amsterdam. Lets build together.</h2>
    <span>Maybe particle system here</span>
  </Layout>
);

export default Home;
