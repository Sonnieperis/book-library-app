import React from "react";

export default function Home() {
  // Sample books (later we’ll fetch from API)
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://covers.openlibrary.org/b/id/9872065-L.jpg",
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      cover: "https://covers.openlibrary.org/b/id/10523366-L.jpg",
    },
    {
      id: 3,
      title: "Becoming",
      author: "Michelle Obama",
      cover: "https://covers.openlibrary.org/b/id/9259250-L.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDF6EC] flex flex-col items-center py-8">
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-orange-600 mb-2">
        Welcome to Book Library
      </h1>
      <p className="text-gray-600 mb-6">Discover your next favorite read 📚</p>

      {/* Illustration */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
        alt="Books"
        className="w-28 h-28 mb-8"
      />

      {/* Book List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-11/12 max-w-3xl">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
