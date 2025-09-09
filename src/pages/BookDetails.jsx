import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <p>Loading book details...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p>{book.description?.value || book.description || "No description available."}</p>
    </div>
  );
}
