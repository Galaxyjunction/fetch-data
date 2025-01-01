// app/server-side/page.tsx
import React from "react";

interface Book {
  id: number;
  name: string;
  author: string;
}

async function fetchBooks(): Promise<Book[]> {
  const res = await fetch("https://simple-books-api.glitch.me/books/", {
    cache: "no-store", // Ensures data is fetched on every request
  });
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  return res.json();
}

// Server-side component fetches data during render
const ServerSide = async () => {
  let books: Book[] = [];
  try {
    books = await fetchBooks(); // Fetch books data
  } catch (error) {
    console.error("Error fetching books:", error);
  }

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Browse our Books</h1>
        <p className="text-lg text-gray-600">Explore a collection of amazing books!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.length === 0 ? (
          <div className="col-span-3 text-center text-xl text-gray-700">
            <p>No books found at the moment. Please try again later.</p>
          </div>
        ) : (
          books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-xl rounded-lg p-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{book.name}</h2>
              <p className="text-md text-gray-500 mt-2">Author: {book.author}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ServerSide;
