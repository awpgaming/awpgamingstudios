import React, { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
