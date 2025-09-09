import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-6">Page Not Found</p>
      <Link to="/" className="bg-white text-orange-900 px-4 py-2 rounded shadow">
        Go Home
      </Link>
    </div>
  );
}
