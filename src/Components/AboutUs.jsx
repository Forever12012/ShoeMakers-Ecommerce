import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us-container bg-gray-100 p-8 rounded-lg">
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        At <span className="font-semibold">ShoeMakers</span>, we believe that
        shoes are more than just an accessory – they are a statement of style,
        comfort, and individuality. Founded with a passion for quality
        craftsmanship and cutting-edge design, our mission is to provide
        footwear that not only looks great but also feels exceptional.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Whether you're stepping into the office, hitting the gym, or exploring
        the outdoors, we have the perfect pair for every occasion. Our
        collection features a wide variety of styles, from classic sneakers and
        formal shoes to trendy boots and sandals, all made with the finest
        materials and attention to detail.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        What sets us apart is our dedication to blending fashion with
        functionality. We understand that your shoes should support your every
        step while showcasing your unique style. That’s why we continuously
        innovate our designs, ensuring each pair offers the perfect balance of
        durability, comfort, and trend-setting flair.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        At <span className="font-semibold">ShoeMakers</span>, we’re more than
        just a shoe brand. We’re a community of shoe enthusiasts who believe in
        stepping confidently into every journey. Join us, and walk with comfort,
        style, and purpose.
      </p>

      <h2 className="text-3xl font-bold text-black mb-4">Our Promise</h2>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li>
          <span className="font-semibold">Uncompromised Quality</span>: We use
          premium materials to craft footwear that lasts.
        </li>
        <li>
          <span className="font-semibold">Innovative Design</span>: Our designs
          are inspired by global trends and modern lifestyles.
        </li>
        <li>
          <span className="font-semibold">Sustainability</span>: We’re committed
          to minimizing our environmental footprint by using eco-friendly
          processes and materials.
        </li>
        <li>
          <span className="font-semibold">Customer Satisfaction</span>: Your
          comfort and happiness are our top priorities.
        </li>
      </ul>

      <p className="text-lg text-gray-700 mt-6">
        Thank you for choosing <span className="font-semibold">ShoeMakers</span>
        . Together, we’ll make every step count!
      </p>
    </div>
  );
};

export default AboutUs;
