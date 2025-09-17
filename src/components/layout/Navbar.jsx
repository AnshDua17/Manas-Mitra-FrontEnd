import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { User, Sun, Moon } from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar = ({ isLoggedIn, onLogin, theme, toggleTheme }) => {
  const activeLinkStyle = { color: '#4CB9E7' };

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Manas Mitra Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-dark-navy dark:text-off-white">Manas Mitra</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-gray-600 hover:text-primary-blue dark:text-gray-300 dark:hover:text-accent-teal transition-colors font-medium">Home</NavLink>
          <NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-gray-600 hover:text-primary-blue dark:text-gray-300 dark:hover:text-accent-teal transition-colors font-medium">About</NavLink>
          <NavLink to="/features" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-gray-600 hover:text-primary-blue dark:text-gray-300 dark:hover:text-accent-teal transition-colors font-medium">Features</NavLink>
          <NavLink to="/contact" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)} className="text-gray-600 hover:text-primary-blue dark:text-gray-300 dark:hover:text-accent-teal transition-colors font-medium">Contact</NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="px-5 py-2 rounded-lg font-medium text-white bg-primary-blue hover:bg-blue-700 transition-colors">
                View Dashboard
              </Link>
              <button className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </>
          ) : (
            <>
              <button onClick={onLogin} className="px-5 py-2 rounded-lg font-medium text-primary-green border border-primary-green hover:bg-green-50 dark:hover:bg-gray-800 transition-colors">
                Login as Guest
              </button>
              <Link to="/signup" className="px-5 py-2 rounded-lg font-medium text-white bg-primary-blue hover:bg-blue-700 transition-colors">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;