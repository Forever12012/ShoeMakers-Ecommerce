import React, { useState } from "react";
import { useCart } from "./CartContext"; // Import the useCart hook
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { cartItems, clearCart } = useCart(); // Assuming you have cartItems in your useCart hook
  const navigate = useNavigate(); // Initialize navigate

  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cardholderName, setCardholderName] = useState(""); // New state for cardholder's name
  const [cardNumber, setCardNumber] = useState(""); // New state for card number
  const [expiryDate, setExpiryDate] = useState(""); // New state for expiry date
  const [cvv, setCvv] = useState(""); // New state for CVV
  const [errors, setErrors] = useState({}); // Object to hold validation errors

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.id);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => {
    const priceValue = Number(item.price.replace(/\$/g, ""));
    return acc + priceValue * item.quantity;
  }, 0);

  // Validate inputs
  const validateInputs = () => {
    const newErrors = {};

    // Name validation
    if (!name) newErrors.name = "Name is required.";

    // Email validation
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    // Street address validation
    if (!streetAddress) newErrors.streetAddress = "Street address is required.";

    // City validation
    if (!city) newErrors.city = "City is required.";

    // State validation
    if (!state) newErrors.state = "State is required.";

    // Contact number validation (10 digits only)
    if (!contactNumber) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (!/^\d{10}$/.test(contactNumber)) {
      newErrors.contactNumber = "Contact number must be 10 digits.";
    }

    // Postal code validation (6 digits only)
    if (!postalCode) {
      newErrors.postalCode = "Postal code is required.";
    } else if (!/^\d{6}$/.test(postalCode)) {
      newErrors.postalCode = "Postal code must be 6 digits.";
    }

    // Cardholder's name validation
    if (!cardholderName)
      newErrors.cardholderName = "Cardholder's name is required.";

    // Card number validation (Luhn algorithm check can be implemented for better validation)
    if (!cardNumber) {
      newErrors.cardNumber = "Card number is required.";
    } else if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }

    // Expiry date validation
    if (!expiryDate) {
      newErrors.expiryDate = "Expiry date is required.";
    } else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format.";
    } else {
      const [month, year] = expiryDate.split("/");
      const currentDate = new Date();
      const expiry = new Date(`20${year}`, month - 1);
      if (expiry < currentDate) {
        newErrors.expiryDate = "Card is expired.";
      }
    }

    // CVV validation
    if (!cvv) {
      newErrors.cvv = "CVV is required.";
    } else if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = "CVV must be 3 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle confirm payment
  const handleConfirmPayment = async () => {
    if (validateInputs()) {
      // Prepare the data to be sent
      const requestData = {
        name,
        email_address: email,
        street_address: streetAddress,
        city,
        state,
        phone_number: contactNumber,
        postal_code: postalCode,
        order_items: cartItems, // Include cart items in the request body
        totalPrice, // Include total price
      };

      // Log the data to the console
      console.log("Data being sent to the backend:", requestData);

      try {
        const response = await axios.post(
          "http://localhost:8000/checkout",
          requestData
        );

        if (response.status === 200) {
          console.log(response);
          clearCart(); // Clear the cart
          navigate("/order-confirmation"); // Redirect to confirmation page
        } else {
          console.error("Failed to place the order.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="font-[sans-serif] bg-white">
      <div className="max-lg:max-w-xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                Checkout
              </h2>
            </div>

            <form className="lg:mt-16">
              {/* Shipping info */}
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Shipping info
                </h2>
                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none ${
                        errors.name ? "border-red-600" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none ${
                        errors.email ? "border-red-600" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Street address"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      className={`px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none ${
                        errors.streetAddress ? "border-red-600" : ""
                      }`}
                    />
                    {errors.streetAddress && (
                      <p className="text-red-600 text-sm">
                        {errors.streetAddress}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={`px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none ${
                        errors.city ? "border-red-600" : ""
                      }`}
                    />
                    {errors.city && (
                      <p className="text-red-600 text-sm">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className={`px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none ${
                        errors.state ? "border-red-600" : ""
                      }`}
                    />
                    {errors.state && (
                      <p className="text-red-600 text-sm">{errors.state}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Contact number"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className={`px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none ${
                        errors.contactNumber ? "border-red-600" : ""
                      }`}
                    />
                    {errors.contactNumber && (
                      <p className="text-red-600 text-sm">
                        {errors.contactNumber}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Postal code"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className={`px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none ${
                        errors.postalCode ? "border-red-600" : ""
                      }`}
                    />
                    {errors.postalCode && (
                      <p className="text-red-600 text-sm">
                        {errors.postalCode}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment method */}
              <div className="mt-16">
                <h2 className="text-xl font-bold text-gray-800">
                  Payment method
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="card"
                      checked={paymentMethod === "card"}
                      onChange={handlePaymentChange}
                    />
                    <label
                      htmlFor="card"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="Visa"
                      />
                      <img
                        src="https://readymadeui.com/images/american-express.webp"
                        className="w-12"
                        alt="Amex"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="MasterCard"
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={handlePaymentChange}
                    />
                    <label
                      htmlFor="paypal"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/paypal.webp"
                        className="w-20"
                        alt="PayPal"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Cardholder's Name"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    className={`px-2 pb-2 bg-white text-gray-800 w-full mb-4 text-sm border-b focus:border-blue-600 outline-none ${
                      errors.cardholderName ? "border-red-600" : ""
                    }`}
                  />
                  {errors.cardholderName && (
                    <p className="text-red-600 text-sm">
                      {errors.cardholderName}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className={`px-2 pb-2 bg-white text-gray-800 w-full  mb-4 text-sm border-b focus:border-blue-600 outline-none ${
                      errors.cardNumber ? "border-red-600" : ""
                    }`}
                  />
                  {errors.cardNumber && (
                    <p className="text-red-600 text-sm">{errors.cardNumber}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className={`px-2 pb-2 bg-white text-gray-800 w-full mb-4 text-sm  border-b focus:border-blue-600 outline-none ${
                      errors.expiryDate ? "border-red-600" : ""
                    }`}
                  />
                  {errors.expiryDate && (
                    <p className="text-red-600 text-sm">{errors.expiryDate}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className={`px-2 pb-2 bg-white text-gray-800 w-full mb-4 text-sm border-b focus:border-blue-600 outline-none ${
                      errors.cvv ? "border-red-600" : ""
                    }`}
                  />
                  {errors.cvv && (
                    <p className="text-red-600 text-sm">{errors.cvv}</p>
                  )}
                </div>
              </div>

              {/* Confirm payment button */}
              <div className="flex justify-center mt-16">
                <button
                  type="button"
                  onClick={handleConfirmPayment}
                  className="bg-gray-800 text-white font-bold text-lg py-4 px-12 rounded-md transition duration-300 transform hover:scale-105"
                >
                  Pay now - ${totalPrice.toFixed(2)}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 lg:h-screen lg:sticky lg:top-0">
            <div className="relative h-full">
              <div className="p-6 overflow-auto max-lg:max-h-[400px] lg:h-[calc(100vh-60px)] max-lg:mb-8">
                <h2 className="text-xl font-bold text-gray-800">
                  Order Summary
                </h2>
                <div className="space-y-8 mt-8">
                  {/* Dynamic product list */}
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div key={item.id} className="flex flex-col gap-4">
                        <div className="max-w-[140px] p-4 shrink-0 bg-gray-200 rounded-lg">
                          <img
                            src={item.image}
                            className="w-full object-contain"
                          />
                        </div>
                        <div className="w-full">
                          <h3 className="text-base text-gray-800 font-bold">
                            {item.title}
                          </h3>
                          <ul className="text-sm text-gray-800 space-y-2 mt-2">
                            <li className="flex flex-wrap gap-4">
                              Quantity{" "}
                              <span className="ml-auto">{item.quantity}</span>
                            </li>
                            <li className="flex flex-wrap gap-4">
                              Total Price{" "}
                              <span className="ml-auto">
                                $
                                {Number(item.price.replace(/\$/g, "")) *
                                  item.quantity}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No items in the cart.</p>
                  )}
                </div>
              </div>

              <div className="lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full p-4">
                <h4 className="flex flex-wrap gap-4 text-base text-gray-800 font-bold">
                  Total Price
                  <span className="ml-auto text-blue-600 text-lg">
                    ${totalPrice.toFixed(2)}
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
