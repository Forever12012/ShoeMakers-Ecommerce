import React from "react";

const Banner2 = () => {
  return (
    <div className="flex gap-4 max-sm:flex-col items-center justify-center text-center bg-blue-600 text-white px-6 py-3.5 rounded font-[sans-serif]">
      <p className="text-base">Limited Time Offer: Get 20% Off!</p>
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-white text-blue-500 py-2.5 px-5 rounded text-sm hover:underline"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner2;
