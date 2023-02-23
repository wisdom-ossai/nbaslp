import React, { ReactNode } from "react";
import { useAuthContext } from "./AuthContext/AuthContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthContext();
  return (
    <>
      <TopNav />
      <Navbar user={user} />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
