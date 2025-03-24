"use client";

import React, { useState } from "react";

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex bg-blue-100 h-14 items-center px-6">
      <div className="name">
        <p className="text-2xl font-bold text-black hover:text-green-400">
         The Quran Academy
        </p>
      </div>
      <div className="ok1 ml-auto">
        <div className="lg:hidden flex justify-end items-center">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`flex justify-end space-x-6 font-bold lg:flex  ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li>
            <a href="/" className="hover:text-orange-200">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-orange-200">
              About
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-orange-200">
              Contact
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-orange-200">
              Services
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-orange-200">
              Student portal
            </a>
          </li>
          <li>
            <a href="/student" className="hover:text-orange-200">
              Sign in
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-orange-200">
              Live Class
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
