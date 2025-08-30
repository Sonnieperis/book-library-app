import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { searchBooks } from "../services/openLibrary";

export default function Home() {
  const [query, setQuery] = useState("harry potter"); // initial demo
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const runSearch = async (q) => {
    setQuery(q);
  };

  useEffect(() => {
    let ignore = false;
    async function load() {
      if (!query) {
        setBooks([]);
        setStatus("idle");
        return;
      }
      setStatus("loading");
      setError("");
      try {
        const results = await searchBooks(query);
        if (!ignore) {
          setBooks(results);
          setStatus("success");
        }
      } catch (e) {
        if (!ignore) {
          setError("Failed to fetch books. Check your network and try again.");
          setStatus("error");
        }
      }
    }
    load();
    return () => { ignore = true; };
  }, [query]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="mb-6 text-2xl font-bold">Book Library</h1>
      <SearchBar onSearch={runSearch} initial={query} />

      {status === "loading" && <Spinner />}
      {status === "error" && <ErrorMessage message={error} />}

      {status === "success" && books.length === 0 && (
        <p className="mt-6 text-gray-600">No books found. Try a different search.</p>
      )}

      {status === "success" && books.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {books.map((b) => (
            <BookCard key={b.workId} book={b} />
          ))}
        </div>
      )}
    </div>
  );
}
