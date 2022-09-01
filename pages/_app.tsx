import "../styles/globals.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/banner.css";
import "../styles/community.css";
import "../styles/footer.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
