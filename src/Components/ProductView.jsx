import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { useCart } from "./CartContext"; // Import the useCart hook

const ProductView = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { image, title, description, price } = location.state;

  const { addToCart } = useCart(); // Get addToCart function from context
  const [quantity, setQuantity] = useState(1); // State for product quantity

  const handleAddToCart = () => {
    const product = {
      id: Date.now(),
      image,
      title,
      description,
      price,
      quantity,
    }; // Include quantity in the product
    addToCart(product);
  };

  const handleBuyNow = () => {
    const product = {
      id: Date.now(),
      image,
      title,
      description,
      price,
      quantity,
    };
    navigate("/checkout", { state: { product } }); // Navigate to checkout with product data
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="font-sans tracking-wide max-md:mx-auto">
      <div className="bg-gradient-to-r from-gray-600 via-gray-900 to-gray-900 md:min-h-[600px] grid items-start grid-cols-1 lg:grid-cols-5 md:grid-cols-2">
        <div className="lg:col-span-3 h-full p-8">
          <div className="relative h-full flex items-center justify-center lg:min-h-[580px]">
            <img
              src={image}
              alt={title}
              className="lg:w-3/5 w-3/4 h-full object-contain max-lg:p-8"
            />
          </div>
        </div>

        <div className="lg:col-span-2 bg-gray-100 py-6 px-8 h-full">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

            <div className="flex space-x-1 mt-2">
              <svg
                className="w-4 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800">Price</h3>
            <p className="text-gray-800 text-3xl font-bold mt-4">{price}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800">Quantity</h3>
            <div className="flex divide-x border w-max mt-4 rounded overflow-hidden">
              <button
                type="button"
                className="bg-gray-100 w-10 h-9 font-semibold flex items-center justify-center"
                onClick={decrementQuantity} // Decrease quantity
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-current inline"
                  viewBox="0 0 124 124"
                >
                  <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                </svg>
              </button>
              <button
                type="button"
                className="bg-transparent w-10 h-9 font-semibold flex items-center justify-center text-gray-800 text-lg"
              >
                {quantity}
              </button>
              <button
                type="button"
                className="bg-gray-800 text-white w-10 h-9 font-semibold flex items-center justify-center"
                onClick={incrementQuantity} // Increase quantity
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-current inline"
                  viewBox="0 0 42 42"
                >
                  <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2">
            <button
              type="button"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              onClick={handleAddToCart} // Add to cart button click handler
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="bg-white text-gray-800 px-4 py-2 rounded-lg border border-gray-800 hover:bg-gray-100 transition"
              onClick={handleBuyNow} // Handle Buy Now button
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
