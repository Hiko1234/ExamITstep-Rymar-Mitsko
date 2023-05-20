import React from "react";
//components
import Header from "./header";
import Footer from "./footer";

const Layouts = (props: any) => {
  const { children } = props;
  return (
    <>
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
        <Header />
        <main style={{flex: "1 1 auto"}}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
