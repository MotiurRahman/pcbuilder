import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default BaseLayout;
