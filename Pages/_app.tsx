// pages/_app.tsx

import { ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { 
  Header, 
  Layout 
} from "../components";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  useEffect(() => {
    document.body.classList?.remove('loading');
  })

  return (
    <>
      <Header title={"Batman"}/>
      <Layout pageProps={pageProps}>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}
