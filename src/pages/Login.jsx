import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF6EC]">
      <div className="w-[350px] bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header */}
        <div className="text-center p-6">
          <h2 className="text-gray-700 text-lg">Sign in to continue</h2>
          <h1 className="text-2xl font-extrabold text-orange-600">
            BOOK LIBRARY
          </h1>
          {/* Replace with actual image later */}
          <div className="flex justify-center mt-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
              alt="Books"
              className="w-16 h-16"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-orange-600 p-6 rounded-t-3xl">
          <h2 className="text-white font-bold text-xl mb-4">Log in</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-white mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hello@reallygreatsite.com"
                className="w-full px-4 py-2 rounded-full focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="******"
                className="w-full px-4 py-2 rounded-full focus:outline-none"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-white text-orange-600 font-bold py-2 rounded-full hover:bg-gray-200"
            >
              Login
            </button>
          </form>

          {/* Forgot Password link */}
          <p className="text-white text-sm text-center mt-4">
            <a href="/forgot-password" className="underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
