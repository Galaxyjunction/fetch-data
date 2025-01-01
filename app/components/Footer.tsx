import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 p-8 text-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="text-center mb-6">
          <p className="font-semibold text-xl mb-2 animate-text-fade-in">
            &copy; 2024 | All Rights Reserved
          </p>
          <p className="text-md text-gray-200 mb-4 animate-text-fade-in">
            Client-side and Server-side Data Fetching
          </p>
        </div>
        
        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/kehkashan-ahad-8481b2244"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-blue-900 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-2xl" />
            <span className="hidden sm:inline text-lg">LinkedIn</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-sm text-center">
          <p className="animate-text-fade-in text-gray-300 mb-2">
            If you have any questions, feel free to reach out at:
          </p>
          <p>
            <a
              href="mailto:kehkashan.sidd@gmail.com"
              className="text-white hover:text-blue-900 transition"
            >
              kehkashan.sidd@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
