import React from "react";
import Header from "../components/Header";

const MainLayout = props => {
  return (
    <div className="main">
      <Header />
      {props.children}
    </div>
  );
};