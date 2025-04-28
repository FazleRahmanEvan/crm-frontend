import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 min-h-screen">
      <div className="p-6 font-bold text-xl">Mini-CRM</div>
      <nav className="flex flex-col space-y-2 p-4">
        <NavLink to="/dashboard" className="sidebar-link">
          Dashboard
        </NavLink>
        <NavLink to="/clients" className="sidebar-link">
          Clients
        </NavLink>
        <NavLink to="/projects" className="sidebar-link">
          Projects
        </NavLink>
        <NavLink to="/reminders" className="sidebar-link">
          Reminders
        </NavLink>
        <NavLink to="/interactions" className="sidebar-link">
          Interactions
        </NavLink>
        <NavLink to="/profile" className="sidebar-link">
          Profile
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
