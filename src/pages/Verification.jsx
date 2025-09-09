import React, { useState } from "react";

export default function Verification() {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto focus next input
      if (value && index < 3) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verification code entered:", code.join(""));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF6EC]">
      <div className="w-[350px] bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header */}
        <div className="text-center p-6">
          <h1 className="text-2xl font-extrabold text-orange-600">
            BOOK LIBRARY
          </h1>
          {/* Replace with your book image */}
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
          <h2 className="text-white font-bold text-xl mb-2">
            Account Verification
          </h2>
          <p className="text-white text-sm mb-6">
            Please enter the 4 digit code sent to your Email
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 4 Digit Inputs */}
            <div className="flex justify-between mb-4">
              {code.map((digit, i) => (
                <input
                  key={i}
                  id={`code-${i}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, i)}
                  className="w-12 h-12 text-center text-xl font-bold rounded-lg focus:outline-none"
                />
              ))}
            </div>

            {/* Resend Code */}
            <p className="text-white text-sm text-center mb-4">
              <button
                type="button"
                onClick={() => console.log("Resend Code")}
                className="underline"
              >
                Resend Code
              </button>
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
