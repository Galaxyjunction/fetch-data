import React from "react"; 
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-blue-400">
      <h1 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
        Choose Your Data Rendering Approach
      </h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <Link href="/client-side">
          <div className="bg-white shadow-lg rounded-xl p-6 w-80 h-96 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-700">Client-Side Rendering</h2>
            <p className="text-gray-600 mt-4 flex-1">
              Fetch and render content directly in the browser, offering a seamless user experience with dynamic interactions.
            </p>
            <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
              Explore Client-Side
            </Button>
          </div>
        </Link>
        <Link href="/server-side">
          <div className="bg-white shadow-lg rounded-xl p-6 w-80 h-96 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-700">Server-Side Rendering</h2>
            <p className="text-gray-600 mt-4 flex-1">
              Optimize your site&apos;s SEO and loading times by fetching data on the server before page rendering.
            </p>
            <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
              Explore Server-Side
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
