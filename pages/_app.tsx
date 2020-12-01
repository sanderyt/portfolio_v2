import { Theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
};

export default MyApp;
