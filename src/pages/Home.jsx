import { useState, useEffect } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example query: "harry potter"
    fetch("https://openlibrary.org/search.json?q=harry+potter")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs.slice(0, 10)); // Take first 10 results
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-6">Loading books...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Welcome to the Library</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded-lg shadow-md"
          >
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                className="mb-3 rounded"
              />
            ) : (
              <div className="mb-3 h-40 flex items-center justify-center bg-gray-200 text-gray-600">
                No Cover
              </div>
            )}
            <h2 className="font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-700">
              {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
            </p>
            <p className="text-xs text-gray-500">
              {book.publisher ? book.publisher[0] : "No Publisher"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
