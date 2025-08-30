import { useState } from "react";

export default function SearchBar({ onSearch, initial = "" }) {
  const [q, setQ] = useState(initial);

  const submit = (e) => {
    e.preventDefault();
    onSearch(q);
  };

  return (
    <form onSubmit={submit} className="flex w-full max-w-2xl gap-2">
      <input
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
        placeholder="Search by title, author, or keywords…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search books"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
