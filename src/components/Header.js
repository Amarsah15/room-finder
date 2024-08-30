import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">HomeWhirl</div>
        <nav className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-green-500">Home</a>
          <a href="#about" className="text-gray-700 hover:text-green-500">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-green-500">Contact Us</a>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-700 hover:text-green-500">Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
