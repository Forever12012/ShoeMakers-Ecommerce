import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useCart } from "./CartContext"; // Import the useCart hook
import { IoCartOutline } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";

const Header = () => {
  const { cartItems } = useCart(); // Get cart items from context
  const navigate = useNavigate(); // Initialize navigate

  const handleCartClick = () => {
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <header className="shadow-md bg-gradient-to-r from-violet-300 to-violet-500 font-[serif] tracking-wide relative z-50">
      <section className="flex items-center flex-wrap lg:justify-center gap-3 py-2 sm:px-8 px-4 border-b border-gray-300 min-h-[65px]">
        <div className="left-10 absolute z-50 bg-white flex px-3 py-2 rounded-lg shadow-md max-lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="18px"
            className="cursor-pointer fill-gray-500 mr-4 rotate-90 inline-block"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent w-full text-sm text-gray-600"
          />
        </div>

        <a href="#home" className="flex items-center space-x-2">
          <div>
            {" "}
            <GiRunningShoe className="text-3xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 hover:text-brown-600 transition-colors duration-300 font-[cursive]">
            ShoeMakers
          </h1>
        </a>
        <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-6">
          <span className="relative" onClick={handleCartClick}>
            <IoCartOutline className="text-3xl cursor-pointer text-gray-700 hover:text-black transition-transform duration-300 transform hover:scale-105" />
            <span className="absolute -top-2 -right-3 rounded-full bg-black px-2 py-1 text-xs text-white">
              {cartItems.length}
            </span>
          </span>
        </div>
      </section>

      <div className="flex flex-wrap justify-center px-8 bg-violet-200 py-2 relative">
        <div id="collapseMenu" className="max-lg:hidden lg:block">
          <ul className="lg:flex lg:gap-x-10">
            <li>
              <Link
                to="/"
                className="block text-lg font-semibold text-gray-800 pb-3 hover:text-sky-700 transition-colors duration-300 border-b-4 border-transparent hover:border-sky-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/new-collections"
                className="block text-lg font-semibold text-gray-800 pb-3 hover:text-sky-700 transition-colors duration-300 border-b-4 border-transparent hover:border-sky-700"
              >
                New Collections
              </Link>
            </li>
            <li>
              <Link
                to="/trendy-shoes"
                className="block text-lg font-semibold text-gray-800 pb-3 hover:text-sky-700 transition-colors duration-300 border-b-4 border-transparent hover:border-sky-700"
              >
                Trendy Shoes
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block text-lg font-semibold text-gray-800 pb-3 hover:text-sky-700 transition-colors duration-300 border-b-4 border-transparent hover:border-sky-700"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
