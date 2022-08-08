// import 'assets/'
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Layout } from "@components/common";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
