import "../styles/global.css";
import "@fontsource/work-sans";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/800.css";
import type { AppProps } from "next/app";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
