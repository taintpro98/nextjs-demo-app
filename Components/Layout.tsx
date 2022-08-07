// components/layout.js

// import Navbar from './navbar'
import Footer from './Footer'

export default function Layout({ children }: any) {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

