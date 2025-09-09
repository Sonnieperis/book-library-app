import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-orange-800 p-4 rounded-lg mb-6 shadow flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-yellow-300">
        📚 Book Library
      </Link>

      {/* Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-yellow-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}
