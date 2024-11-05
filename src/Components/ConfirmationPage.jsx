import React, { useEffect } from "react";
import confetti from "canvas-confetti"; // Confetti animation library

const ConfirmationPage = () => {
  // Trigger confetti on page load
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md text-center animate-fade-in-down">
        {/* Glowing Success Icon */}
        <div className="text-green-500 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto transform hover:scale-110 transition-transform duration-300 ease-in-out drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="green"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M9 12l2 2 4-4"
              stroke="green"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Payment Successful Text */}
        <h1 className="text-5xl font-bold mt-6 text-gray-800 animate-fade-in-up">
          Payment Successful!
        </h1>

        {/* Confirmation Message */}
        <p className="mt-4 text-gray-600 animate-fade-in-up delay-100">
          Thank you for your purchase. Your order has been confirmed and will be
          processed soon.
        </p>

        {/* Glowing Button */}
        <button
          className="mt-8 px-6 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 hover:bg-gradient-to-l text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
