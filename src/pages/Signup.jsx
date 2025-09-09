import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF6EC]">
      <div className="w-[350px] bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="text-center p-6">
          <h2 className="text-gray-700 text-lg">Welcome to</h2>
          <h1 className="text-2xl font-extrabold text-orange-600">
            BOOK LIBRARY
          </h1>
          {/* Replace with actual image later */}
          <div className="flex justify-center mt-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
              alt="Book Icon"
              className="w-16 h-16"
            />
          </div>
        </div>

        {/* Signup Form */}
        <div className="bg-orange-600 p-6 rounded-t-3xl">
          <h2 className="text-white font-bold text-xl mb-4">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-white mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Olivia Wilson"
                className="w-full px-4 py-2 rounded-full focus:outline-none"
              />
            </div>

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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-orange-600 font-bold py-2 rounded-full hover:bg-gray-200"
            >
              Next
            </button>
          </form>

          {/* Footer link */}
          <p className="text-white text-sm text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="underline font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
