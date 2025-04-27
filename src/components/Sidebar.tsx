import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Mini-CRM</h2>
      <ul className="space-y-6">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/clients" className="hover:text-gray-400">
            Clients
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-400">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/reminders" className="hover:text-gray-400">
            Reminders
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
