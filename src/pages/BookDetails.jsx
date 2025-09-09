// src/pages/BookDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams(); // dynamic ID from route
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        setLoading(true);
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!response.ok) throw new Error("Failed to fetch book details");
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBookDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-8">Loading book details...</p>;
  if (error) return <p className="text-red-500 text-center mt-8">{error}</p>;
  if (!book) return <p className="text-center mt-8">No details available.</p>;

  return (
    <div className="min-h-screen bg-orange-900 text-white p-6">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-6 bg-orange-700 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow"
      >
        ← Back
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Cover */}
        {book.covers && (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
            alt={book.title}
            className="w-64 h-auto rounded-lg shadow-lg"
          />
        )}

        {/* Book Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          {book.description && (
            <p className="mb-4 text-lg">
              {typeof book.description === "string"
                ? book.description
                : book.description.value}
            </p>
          )}

          <ul className="space-y-2">
            {book.first_publish_date && (
              <li>
                <strong>First Published:</strong> {book.first_publish_date}
              </li>
            )}
            {book.subjects && (
              <li>
                <strong>Subjects:</strong> {book.subjects.slice(0, 5).join(", ")}
              </li>
            )}
            {book.pagination && (
              <li>
                <strong>Pages:</strong> {book.pagination}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
