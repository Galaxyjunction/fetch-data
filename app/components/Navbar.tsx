// app/components/Navbar.tsx
// app/components/Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdHome, MdCode, MdCloud } from "react-icons/md"; // New Icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const close = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 p-6 shadow-xl sticky top-0 z-50 transform animate-slide-in">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-3xl font-serif font-bold text-white tracking-wider transform hover:scale-110 transition-all duration-300 ease-in-out">
          DataFetch
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="flex items-center px-4 py-2 text-lg text-white hover:text-gray-800 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <MdHome className="mr-3 text-2xl" /> {/* Home Icon */}
            Home
          </Link>
          <Link
            href="/client-side"
            className="flex items-center px-4 py-2 text-lg text-white hover:text-gray-800 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <MdCode className="mr-3 text-2xl" /> {/* Client Side Icon */}
            Client Side
          </Link>
          <Link
            href="/server-side"
            className="flex items-center px-4 py-2 text-lg text-white hover:text-gray-800 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <MdCloud className="mr-3 text-2xl" /> {/* Server Side Icon */}
            Server Side
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-full bg-gradient-to-b from-purple-500 to-pink-500 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-in-out z-20`}
      >
        <div className="flex flex-col items-center justify-center pt-20 space-y-6">
          <button
            onClick={toggleMenu}
            className="mb-8 text-white text-3xl"
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            className="flex items-center w-full px-4 py-3 text-lg text-white hover:bg-black hover:bg-opacity-50 rounded-md transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={close}
          >
            <MdHome className="mr-3 text-2xl" /> {/* Home Icon */}
            Home
          </Link>
          <Link
            href="/client-side"
            className="flex items-center w-full px-4 py-3 text-lg text-white hover:bg-black hover:bg-opacity-50 rounded-md transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={close}
          >
            <MdCode className="mr-3 text-2xl" /> {/* Client Side Icon */}
            Client Side
          </Link>
          <Link
            href="/server-side"
            className="flex items-center w-full px-4 py-3 text-lg text-white hover:bg-black hover:bg-opacity-50 rounded-md transform hover:scale-105 transition duration-300 ease-in-out"
            onClick={close}
          >
            <MdCloud className="mr-3 text-2xl" /> {/* Server Side Icon */}
            Server Side
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
