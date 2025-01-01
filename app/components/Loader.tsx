import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="flex flex-col items-center space-y-6">
        {/* Rotating Ring */}
        <div className="relative w-32 h-32">
          <div className="absolute w-full h-full rounded-full border-8 border-t-transparent border-b-transparent animate-spin-slow border-t-[#3b82f6]"></div>
        </div>

        {/* Loading Text */}
        <p className="text-lg font-semibold text-gray-700 animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loader;
