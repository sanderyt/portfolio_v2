import React, { FC } from "react";

import { Layout } from "../components/UI/Layout";
import { Header } from "../components/UI/Header";
import { FlexBox } from "react-styled-flex";

const Blog: FC = () => {
  return (
    <Layout>
      <Header title="Blog" />
      <FlexBox center>
        <h2>Still have to work on the first article...</h2>
      </FlexBox>
    </Layout>
  );
};

export default Blog;
