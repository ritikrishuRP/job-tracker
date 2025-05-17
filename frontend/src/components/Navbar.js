import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-gray-200 transition duration-150">
          Job Tracker
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-white hover:bg-blue-800 px-4 py-2 rounded-md transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-md hover:bg-blue-100 transition duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
