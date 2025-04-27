import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-blue-600 p-4 flex items-center justify-between text-white">
      <div className="flex items-center">
        <span className="text-2xl font-bold">Mini-CRM</span>
      </div>

      <div className="md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <nav className={`${isMobileMenuOpen ? "block" : "hidden"} md:flex`}>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/clients" className="hover:text-gray-300">
              Clients
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/reminders" className="hover:text-gray-300">
              Reminders
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
