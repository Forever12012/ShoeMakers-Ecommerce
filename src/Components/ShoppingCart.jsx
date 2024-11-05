import React from "react";
import { useCart } from "./CartContext"; // Import the useCart hook
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart(); // Get the cart items and remove function from context
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Remove the "$" symbol and convert the price to a float
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return total + price * item.quantity;
    }, 0);
  };

  // Function to calculate total items
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="fixed left-0 w-3/5 h-full max-h-[80vh] bg-white p-6 shadow-xl rounded-lg z-10 overflow-y-auto m-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty.</p>
          <p className="mt-2">Please add products to your cart for checkout.</p>
        </div>
      ) : (
        <ul className="space-y-6">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b border-gray-300 pb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain rounded-lg shadow-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.price}</p>
                <p className="text-gray-500">Qty: {item.quantity}</p>
              </div>
              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Calculate Box Section */}
      <div className="fixed right-4 top-36 w-1/3 h-full bg-gray-100 p-6 shadow-xl rounded-lg z-10 transform -translate-x-4">
        <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Total Items:</span>
          <span>{calculateTotalItems()}</span>
        </div>
        <div className="flex justify-between mb-10">
          <span>Total Price:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        {/* Conditionally render the checkout button */}
        {cartItems.length > 0 ? (
          <button
            onClick={() => navigate("/checkout")} // Navigate to the checkout page
            className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 mb-2"
          >
            Proceed to Checkout
          </button>
        ) : (
          <button
            disabled
            className="bg-blue-200 text-white py-2 px-4 rounded w-full mb-2 cursor-not-allowed"
          >
            Proceed to Checkout
          </button>
        )}

        {/* Continue Shopping Button */}
        <button
          onClick={() => navigate("/")} // Navigate to the home page
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
