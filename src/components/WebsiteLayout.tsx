import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopNav />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
