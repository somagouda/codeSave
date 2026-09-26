
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-800 bg-gray-950/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">&lt;/&gt;</span>
          </div>

          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">
              Paste<span className="text-blue-500">Hub</span>
            </h1>
            <p className="text-[10px] text-gray-500">
              Share. Store. Code.
            </p>
          </div>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-500/15 text-blue-400"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-500/15 text-blue-400"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            Pastes
          </NavLink>

          {/* Create Paste Button */}
          <NavLink
            to="/pastes"
            className="ml-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            + New Paste
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

