import axios from "axios";

const SEARCH_URL = "https://openlibrary.org/search.json";           // ?q=term
const WORKS_URL = (workId) => `https://openlibrary.org/works/${workId}.json`;
const EDITIONS_URL = (workId) => `https://openlibrary.org/works/${workId}/editions.json?limit=1`;
export const COVER_URL = (coverId, size = "M") =>
  coverId ? `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg` : null;

/**
 * Search books by keyword/title/author.
 * Returns simplified array for UI.
 */
export async function searchBooks(query) {
  if (!query || !query.trim()) return [];
  const { data } = await axios.get(SEARCH_URL, { params: { q: query, limit: 20 } });

  const docs = Array.isArray(data?.docs) ? data.docs : [];
  return docs.map((d) => ({
    workId: (d.key || "").replace("/works/", ""),           // e.g. OL12345W
    title: d.title || "Untitled",
    authors: d.author_name || [],
    publisher: d.publisher?.[0] || null,
    coverId: d.cover_i || null,
  }));
}

/**
 * Fetch detailed work info + first edition for pages/ISBN/date.
 */
export async function getWorkDetails(workId) {
  if (!workId) throw new Error("Missing workId");
  const [workRes, editionsRes] = await Promise.all([
    axios.get(WORKS_URL(workId)),
    axios.get(EDITIONS_URL(workId)),
  ]);

  const work = workRes.data || {};
  const edition = editionsRes.data?.entries?.[0] || {};

  // description can be string or { value }
  let description = null;
  if (typeof work.description === "string") description = work.description;
  else if (work.description?.value) description = work.description.value;

  // subjects array of strings
  const subjects = Array.isArray(work.subjects) ? work.subjects : [];

  // cover: prefer work.covers[0]
  const coverId = Array.isArray(work.covers) && work.covers.length ? work.covers[0] : null;

  // publication date and pages from the edition (best-effort)
  const publicationDate = edition.publish_date || null;
  const numberOfPages = edition.number_of_pages || null;

  // ISBN from edition (10 or 13)
  const isbn10 = Array.isArray(edition.isbn_10) ? edition.isbn_10[0] : null;
  const isbn13 = Array.isArray(edition.isbn_13) ? edition.isbn_13[0] : null;
  const isbn = isbn13 || isbn10 || null;

  return {
    title: work.title || "Untitled",
    description,
    subjects,
    coverId,
    publicationDate,
    numberOfPages,
    isbn,
  };
}
