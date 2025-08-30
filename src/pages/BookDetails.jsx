import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { getWorkDetails, COVER_URL } from "../services/openLibrary";

export default function BookDetails() {
  const { id } = useParams(); // workId
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    async function load() {
      setStatus("loading");
      setError("");
      try {
        const details = await getWorkDetails(id);
        if (!ignore) {
          setData(details);
          setStatus("success");
        }
      } catch (e) {
        if (!ignore) {
          setError("Could not load book details.");
          setStatus("error");
        }
      }
    }
    load();
    return () => { ignore = true; };
  }, [id]);

  if (status === "loading") return <Spinner />;
  if (status === "error") return <div className="mx-auto max-w-3xl px-4 py-6"><ErrorMessage message={error} /></div>;
  if (!data) return null;

  const cover = COVER_URL(data.coverId, "L") || "https://via.placeholder.com/256x384?text=No+Cover";

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <Link to="/" className="text-blue-600 hover:underline">← Back to results</Link>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-[200px_1fr]">
        <img src={cover} alt={data.title} className="h-[300px] w-[200px] rounded object-cover ring-1 ring-gray-200" />

        <div>
          <h1 className="text-2xl font-bold text-gray-900">{data.title}</h1>

          {data.publicationDate ? (
            <p className="mt-2 text-gray-700">Publication Date: {data.publicationDate}</p>
          ) : (
            <p className="mt-2 text-gray-400">Publication Date: N/A</p>
          )}

          {data.isbn ? (
            <p className="text-gray-700">ISBN: {data.isbn}</p>
          ) : (
            <p className="text-gray-400">ISBN: N/A</p>
          )}

          {data.numberOfPages ? (
            <p className="text-gray-700">Pages: {data.numberOfPages}</p>
          ) : (
            <p className="text-gray-400">Pages: N/A</p>
          )}

          {data.subjects?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {data.subjects.slice(0, 12).map((s) => (
                <span key={s} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 ring-1 ring-blue-200">
                  {s}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-gray-400">No subjects available.</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="mb-2 text-xl font-semibold">Description</h2>
        <p className="whitespace-pre-wrap text-gray-800">
          {data.description || "No description available for this work."}
        </p>
      </div>
    </div>
  );
}
