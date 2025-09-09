import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("harry potter");

  useEffect(() => {
    fetch(`https://openlibrary.org/search.json?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs.slice(0, 10)); // limit to 10 results
      })
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">📚 Welcome to Book Library</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
          className="p-2 rounded text-black"
        />
      </div>

      {/* Book List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link
            key={book.key}
            to={`/book/${book.key.replace("/works/", "")}`}
            className="block bg-orange-800 p-4 rounded shadow hover:bg-orange-700"
          >
            <h2 className="font-semibold">{book.title}</h2>
            <p className="text-sm">by {book.author_name?.join(", ")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
