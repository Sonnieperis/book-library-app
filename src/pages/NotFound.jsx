import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-900 text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="bg-orange-700 hover:bg-orange-600 px-4 py-2 rounded-lg shadow"
      >
        Go Home
      </Link>
    </div>
  );
}
