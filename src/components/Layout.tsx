import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      {/* Sidebar for large screens */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
