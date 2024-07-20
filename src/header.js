
import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="top-bar p-4">
        <p className='flex justify-center gap-2 items-center'>Navigate your ideal career path with tailored expert advice <a className='bg-blue-500 px-2 py-1 rounded-lg' href="#">Contact Expert</a></p>
      </div>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          <div className="logo">
            <img src="./images/logo.png" alt="Accredian Logo" className="h-12" />
          </div>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white">Courses</a></li>
            <li><a href="#" className="text-white">Refer & Earn</a></li>
            <li><a href="#" className="text-white">Resources</a></li>
            <li><a href="#" className="text-white">About Us</a></li>
            <li><a href="#" className="text-white">Login</a></li>
            <li><a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-full">Try for free</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
