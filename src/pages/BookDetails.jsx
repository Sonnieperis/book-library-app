import { useParams, Link } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();

  // fake book data (later replace with API)
  const book = {
    id,
    title: "Sample Book",
    author: "Sample Author",
    description:
      "This is a placeholder description. Later we’ll fetch real data from the Open Library API.",
    published: "2023",
    isbn: "123-456-789",
    pages: 250,
    subjects: ["Fiction", "Adventure"],
  };

  return (
    <div className="p-8">
      <Link to="/" className="text-blue-300 underline mb-4 block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="mb-2">by {book.author}</p>
      <p className="mb-2">{book.description}</p>

      <div className="mt-4 space-y-2">
        <p><strong>Published:</strong> {book.published}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Pages:</strong> {book.pages}</p>
        <p><strong>Subjects:</strong> {book.subjects.join(", ")}</p>
      </div>
    </div>
  );
}
