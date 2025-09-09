// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-lg">Page Not Found</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-orange-700 rounded-lg">
        Go Home
      </Link>
    </div>
  );
}
