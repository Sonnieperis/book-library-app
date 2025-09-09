import { Link } from "react-router-dom";
import { COVER_URL } from "../services/openLibrary";

export default function BookCard({ book }) {
  const cover = COVER_URL(book.coverId, "M") || "https://via.placeholder.com/128x192?text=No+Cover";

  return (
    <Link
      to={`/book/${book.workId}`}
      className="group block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex gap-4">
        <img
          src={cover}
          alt={book.title}
          className="h-32 w-24 flex-none rounded object-cover ring-1 ring-gray-200 group-hover:ring-blue-300"
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-gray-900 group-hover:text-blue-700">
            {book.title}
          </h3>
          {book.authors?.length ? (
            <p className="mt-1 text-sm text-gray-700">By {book.authors.join(", ")}</p>
          ) : (
            <p className="mt-1 text-sm text-gray-500">Unknown author</p>
          )}
          {book.publisher ? (
            <p className="mt-2 text-sm text-gray-600">Publisher: {book.publisher}</p>
          ) : (
            <p className="mt-2 text-sm text-gray-400">Publisher: N/A</p>
          )}
        </div>
      </div>
    </Link>
  );
}
