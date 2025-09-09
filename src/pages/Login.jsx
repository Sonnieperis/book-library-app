import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home"); // redirect after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF6EC]">
      <div className="w-[350px] bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header */}
        <div className="text-center p-6">
          <h1 className="text-2xl font-extrabold text-orange-600">
            BOOK LIBRARY
          </h1>
          <div className="flex justify-center mt-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
              alt="Books"
              className="w-20 h-20"
            />
          </div>
        </div>

        {/* Login Section */}
        <div className="bg-orange-600 p-6 rounded-t-3xl">
          <h2 className="text-white font-bold text-xl mb-6">Log in</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg text-gray-700"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg text-gray-700"
              required
            />

            <button
              type="submit"
              className="w-full bg-white text-orange-600 font-bold py-2 rounded-full hover:bg-gray-200"
            >
              Login
            </button>
          </form>

          <p className="text-white text-sm mt-4 text-center">
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
}
