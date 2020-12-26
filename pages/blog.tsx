import React, { FC } from "react";

import { Layout } from "../components/UI/Layout";
import { Header } from "../components/UI/Header";
import { FlexBox } from "react-styled-flex";
import { NextSeo } from "next-seo";

const Blog: FC = () => {
  return (
    <Layout>
      <NextSeo
        title="Blog | React developer from Amsterdam"
        description="My name is Sander van Rijsoort and have been a React developer for almost 2 years. Let's work together!"
      />
      <Header title="Blog" />
      <FlexBox center>
        <h2>Still have to work on the first article...</h2>
      </FlexBox>
    </Layout>
  );
};

export default Blog;
