import React from "react";
import { useNavigate } from "react-router-dom";

export default function Verify() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home"); // redirect directly to Home
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

        {/* Verification Section */}
        <div className="bg-orange-600 p-6 rounded-t-3xl">
          <h2 className="text-white font-bold text-xl mb-4">
            Account Verification
          </h2>
          <p className="text-white text-sm mb-6">
            Please enter the 4 digit code sent to your email
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Inputs */}
            <div className="flex justify-between mb-4">
              <input
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center rounded-lg text-gray-700"
                required
              />
              <input
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center rounded-lg text-gray-700"
                required
              />
              <input
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center rounded-lg text-gray-700"
                required
              />
              <input
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center rounded-lg text-gray-700"
                required
              />
            </div>

            {/* Resend Code */}
            <p className="text-white text-sm text-center cursor-pointer underline">
              Resend Code
            </p>

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full bg-white text-orange-600 font-bold py-2 rounded-full hover:bg-gray-200"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
