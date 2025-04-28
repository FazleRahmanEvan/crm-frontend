// /src/layouts/DashboardLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

import { useThemeContext } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`min-h-screen bg-${theme}-bg text-${theme}-text`}>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
