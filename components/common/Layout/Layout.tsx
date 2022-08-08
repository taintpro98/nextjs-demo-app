import { Navbar, Footer } from "@components/common";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

