import React from "react";
import { useNavigate } from "react-router-dom";

const Banner3 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new-collections");
  };

  return (
    <div className="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12 mb-10">
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-4xl text-3xl font-bold mb-4">
          Discover Our New Collection
        </h2>
        <p className="text-white text-base text-center mb-8">
          Elevate your style with our latest arrivals. Shop now and enjoy
          exclusive discounts!
        </p>
        <button
          type="button"
          onClick={handleClick}
          className="bg-white text-sm text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner3;
