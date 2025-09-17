import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, BookOpen, Users, UserCircle } from 'lucide-react';
import logo from '../../assets/logo.png';

const DashboardSidebar = () => {
  // --- Active link styles are now handled by a function in className ---
  const linkClasses = "flex items-center px-6 py-3 text-sm font-medium transition-colors";
  const defaultLinkClasses = "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800";
  const activeLinkClasses = "bg-blue-50 text-blue-600 font-semibold border-r-4 border-blue-600 dark:bg-slate-800 dark:text-blue-400 dark:border-blue-400";

  return (
    // Added dark mode background and border
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-40 flex flex-col dark:bg-gray-900 dark:border-gray-700">
      {/* Added dark mode border */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Manas Mitra Logo" className="h-8 w-auto" />
          {/* Added dark mode text color */}
          <span className="text-xl font-bold text-dark-navy dark:text-off-white">Manas Mitra</span>
        </Link>
      </div>

      <nav className="mt-6 flex-1">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            // The 'style' prop is removed. We use a function in 'className' instead.
            className={({ isActive }) => 
              `${linkClasses} ${isActive ? activeLinkClasses : defaultLinkClasses}`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Added dark mode border */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        {/* Added dark mode styles for the wellness box */}
        <div className="bg-green-100 rounded-lg p-4 text-center dark:bg-green-900/50">
          <p className="text-sm font-semibold text-green-800 mb-2 dark:text-green-300">Daily Wellness</p>
          <button className="w-full bg-green-600 text-white text-xs py-2 px-3 rounded font-medium hover:bg-green-700 transition-colors dark:bg-green-700 dark:hover:bg-green-600">
            Start 5-min Meditation
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;