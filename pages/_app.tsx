import { Theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
