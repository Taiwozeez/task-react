import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faHeadset,
  faShieldAlt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  return (
    <div>
      {/* Content Section */}
      <section className="px-6 py-16 text-center bg-white">
        <h2
          className="mb-4 text-3xl font-bold text-gray-900"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Welcome to Our Online Store
        </h2>
        <h3
          className="mb-4 text-4xl font-extrabold text-gray-800"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          Your Trusted Online Shopping
        </h3>
        <p
          className="max-w-3xl mx-auto text-gray-500"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Discover a wide range of products from all brands, offering the best
          deals and exceptional customer service. Our store is dedicated to
          providing you with a seamless shopping experience, whether you're
          looking for new arrivals or pre-owned items. Visit us today and shop
          your favorite products!
        </p>

        {/* Features */}
<div
  className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-4"
  data-aos="fade-up"
  data-aos-duration="900"
>
  {/* Feature 1 */}
  <div
    className="flex flex-col items-center"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div className="p-4 bg-gray-200 rounded-full">
      <FontAwesomeIcon
        icon={faTshirt}  // Icon for shopping
        className="text-gray-600 text-2xl"
      />
    </div>
    <h4 className="mt-4 font-bold text-gray-800">Wide Selection</h4>
    <p className="mt-2 text-gray-500">
      Explore a vast collection of clothing, accessories, and more, ensuring
      you find the perfect item for your style.
    </p>
  </div>

  {/* Feature 2 */}
  <div
    className="flex flex-col items-center"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <div className="p-4 bg-gray-200 rounded-full">
      <FontAwesomeIcon
        icon={faHeadset}  // Icon for customer support
        className="text-gray-600 text-2xl"
      />
    </div>
    <h4 className="mt-4 font-bold text-gray-800">24/7 Customer Support</h4>
    <p className="mt-2 text-gray-500">
      Our dedicated support team is available around the clock to assist
      you with any inquiries or concerns regarding your purchases.
    </p>
  </div>

  {/* Feature 3 */}
  <div
    className="flex flex-col items-center"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <div className="p-4 bg-gray-200 rounded-full">
      <FontAwesomeIcon
        icon={faShieldAlt}  // Icon for security and trust
        className="text-gray-600 text-2xl"
      />
    </div>
    <h4 className="mt-4 font-bold text-gray-800">Trusted Retailer</h4>
    <p className="mt-2 text-gray-500">
      We provide reliable and transparent services, ensuring you have a
      smooth and secure shopping experience.
    </p>
  </div>

  {/* Feature 4 */}
  <div
    className="flex flex-col items-center"
    data-aos="fade-up"
    data-aos-delay="400"
  >
    <div className="p-4 bg-gray-200 rounded-full">
      <FontAwesomeIcon
        icon={faCreditCard}  // Icon for payment and financing
        className="text-gray-600 text-2xl"
      />
    </div>
    <h4 className="mt-4 font-bold text-gray-800">Flexible Payment Options</h4>
    <p className="mt-2 text-gray-500">
      Enjoy competitive pricing and multiple payment options to make
      shopping easier and more accessible.
    </p>
  </div>
</div>
      </section>
    </div>
  );
};

export default Welcome;
