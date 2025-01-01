// pages/client-side.tsx
"use client"
import React, { useState, useEffect } from "react";
import Loader from "@/app/components/Loader"; // Import Loader component

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ClientSide = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Explore Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-48 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/fallback-image.png"; // Replace with a fallback image in your public folder
                  }}
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  Price: <span className="font-bold">${product.price.toFixed(2)}</span>
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSide;



