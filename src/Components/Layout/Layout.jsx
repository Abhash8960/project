import React from "react";
import Signup from "../Signup/Signup";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="layout__right">
          <img src="/images/a.png" alt="layout pic" />
        </div>

        <div className="layout__left">
          <Signup />
        </div>
      </div>
    </>
  );
};

export default Layout;
