import React from "react";

import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar for large screens */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
