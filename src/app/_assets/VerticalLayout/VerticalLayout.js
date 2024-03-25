import React, { Component } from "react";

// Layout Related Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect } from "react";

const VerticalLayout  = ({children}) => {

   useEffect(() => {
    window.scrollTo(0, 0);

    if (document.body) document.body.setAttribute("data-sidebar", "dark");
   }, [])
  
    return (
      <React.Fragment>
        <div id="layout-wrapper">
          <Header  />
          <Sidebar />
          <div className="main-content">{children}</div>
          <Footer />
        </div>
      </React.Fragment>
    );

  }



export default VerticalLayout;
