import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="underline text-yellow-300">
        Go back to Home
      </Link>
    </div>
  );
}
