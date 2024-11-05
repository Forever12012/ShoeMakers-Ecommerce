import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProductCard = ({ image, title, description, price, id }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/product/${id}`, { state: { image, title, description, price } });
  };

  return (
    <div
      className="bg-white rounded-lg p-3 cursor-pointer hover:-translate-y-1 transition-all relative"
      onClick={handleNavigation}
    >
      <div className="w-full h-[150px] overflow-hidden mx-auto">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mt-2">{title}</h3>
        <p className="text-gray-600 text-xs mt-1">{description}</p>
        <h4 className="text-sm text-gray-800 font-bold mt-2">{price}</h4>
      </div>
    </div>
  );
};

const ProductList3 = () => {
  const products = [
    {
      id: 1,
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
    {
      id: 5,
      image: "https://readymadeui.com/images/product13.webp",
      title: "Zenith Glow",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$15",
    },
    {
      id: 3,
      image: "https://readymadeui.com/images/product11.webp",
      title: "Velvet Boots",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "$14",
    },
  ];

  return (
    <div className="font-[sans-serif] bg-gray-100">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">
          TOP PRODUCTS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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

export default ProductList3;
