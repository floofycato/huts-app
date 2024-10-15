import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link to="/">huts.</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/booking" className="hover:text-blue-500">Booking</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;