import { Navbar, Footer } from "@components/common";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  pageProps: any;
}

const Layout: FC<LayoutProps> = ({ children, pageProps }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;