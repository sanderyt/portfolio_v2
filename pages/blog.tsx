import React, { FC } from "react";
import Image from "next/image";

import { Layout } from "../components/UI/Layout";
import { Header } from "../components/UI/Header";
import { FlexBox } from "react-styled-flex";

const Blog: FC = () => {
  return (
    <Layout>
      <Header title="Blog" />
      <FlexBox center>
        <h2>
          Still have to work on the first article...{" "}
          <span role="img" aria-label="monkeyIcon">
            🙈
          </span>
        </h2>
        <Image src="/images/background-image-home.jpg" height={500} width={500} />
      </FlexBox>
    </Layout>
  );
};

export default Blog;
