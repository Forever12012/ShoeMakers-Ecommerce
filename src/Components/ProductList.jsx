import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useCart } from "./CartContext";

const ProductCard = ({ image, title, description, price, id }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/product/${id}`, { state: { image, title, description, price } });
  };

  return (
    <div
      className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative"
      onClick={handleNavigation}
    >
      <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>
      <div>
        <h3 className="text-lg font-extrabold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <h4 className="text-lg text-gray-800 font-bold mt-4">{price}</h4>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      id: 1, // Add an id field for product navigation
      image: "https://readymadeui.com/images/product9.webp",
      title: "Sole Elegance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$10",
    },
    {
      id: 2,
      image: "https://readymadeui.com/images/product10.webp",
      title: "Urban Sneakers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$12",
    },
    {
      id: 3,
      image: "https://readymadeui.com/images/product11.webp",
      title: "Velvet Boots",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$14",
    },
    {
      id: 4,
      image: "https://readymadeui.com/images/product12.webp",
      title: "Summit Hiking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$12",
    },
    {
      id: 5,
      image: "https://readymadeui.com/images/product13.webp",
      title: "Zenith Glow",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$15",
    },
    {
      id: 6,
      image: "https://readymadeui.com/images/product14.webp",
      title: "Echo Elegance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$14",
    },
    {
      id: 7,
      image: "https://readymadeui.com/images/product10.webp",
      title: "Pumps",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$14",
    },
    {
      id: 8,
      image: "https://readymadeui.com/images/product10.webp",
      title: "Blaze Burst",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$14",
    },
  ];

  return (
    <div className="font-[sans-serif] bg-gray-100">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Premium Sneakers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
