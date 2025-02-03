
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"; // Correct import for brand icons

const Header = () => {
  
  return (
    <header className="relative">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-gray-900 shadow-md">
        <div className="text-2xl font-bold">
          <span className="text-pink-600">ATHentic</span>
          <br />
          STORE
          <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
        </div>

        {/* Notification Alert */}
        <div
          id="cartAlert"
          className="fixed hidden w-full px-4 py-3 text-lg font-bold text-center text-white transition-opacity duration-300 -translate-x-1/2 bg-green-500 shadow-lg opacity-0 max-w-screen md:text-xl top-5 left-1/2"
        >
          Product successfully added!
        </div>

        <ul className="hidden space-x-6 text-sm font-semibold text-gray-300 uppercase md:flex">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">Features</a></li>
          <li><a href="#" className="hover:text-white">Solutions</a></li>
          <li><a href="#" className="hover:text-white">About Us</a></li>
          <li><a href="#" className="hover:text-white">Contact Us</a></li>
        </ul>

        <button className="flex items-center px-5 py-2 text-white bg-pink-600 rounded hover:bg-pink-700">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Purchase Now
          <span
            id="cartItemCount"
            className="px-2 py-1 ml-2 text-xs text-white bg-green-500 rounded-full"
          >
            0
          </span>
        </button>
      </nav>

      {/* Hamburger Button */}
      <button id="menu-btn" className="block pl-6 text-gray-300 md:hidden focus:outline-none">
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className="hidden p-4 space-y-3 text-sm font-semibold text-gray-300 uppercase bg-gray-800"
      >
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">Features</a></li>
        <li><a href="#" className="hover:text-white">Solutions</a></li>
        <li><a href="#" className="hover:text-white">About Us</a></li>
        <li><a href="#" className="hover:text-white">Contact Us</a></li>
      </ul>

      {/* Hero Section with Background Banner */}
      <section
        className="relative flex flex-col items-start px-8 pt-12 pb-16 bg-center bg-no-repeat bg-cover lg:px-20 lg:pt-20"
        style={{ backgroundImage: "url('/banner.jpeg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Hero Content */}
        <div
          className="relative z-10 max-w-4xl p-8 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Rating and Title */}
          <div className="flex items-center mb-4 space-x-2" data-aos="fade-right" data-aos-delay="200">
            <span className="text-xl font-bold text-yellow-400">★★★★★</span>
            <span className="text-gray-300">4.93</span>
            <span className="text-sm text-gray-400"> | 3,300+ TRUST STORES </span>
          </div>
          <h1
            className="mb-4 text-4xl font-extrabold leading-tight lg:text-6xl"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            Find Your Perfect Product - <span className="text-pink-500">Shop Your</span> Favorite Item Today
          </h1>
          <p
            className="max-w-2xl mb-6 text-gray-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Your Trusted Retailer & Service Provider. Explore a Wide Range of New & Trending Products
            with Expert Services Tailored to Your Needs.
          </p>
          {/* Call to Action */}
          <a
            href="#"
            className="inline-block px-6 py-3 text-white bg-pink-600 rounded shadow-md hover:bg-pink-700"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> View Stores
          </a>
        </div>

        {/* Overlapping Cards */}
        <div className="relative z-10 grid grid-cols-1 gap-4 mt-12 md:grid-cols-3">
          {/* Card 1 */}
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <img
              src="/overlayone.jpeg"
              alt="Classified Listings"
              className="w-full transition-transform duration-300 transform group-hover:scale-110"
            />
            <div
              className="absolute bottom-0 left-0 w-full px-4 py-2 text-lg font-semibold text-white bg-gray-900 bg-opacity-60"
            >
              CLASSIFIED LISTINGS
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <img
              src="/overlaytwo.jpeg"
              alt="Dealer & Seller Profile"
              className="w-full transition-transform duration-300 transform group-hover:scale-110"
            />
            <div
              className="absolute bottom-0 left-0 w-full px-4 py-2 text-lg font-semibold text-white bg-gray-900 bg-opacity-60"
            >
              DEALER & SELLER PROFILE
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <img
              src="/overlaythree.jpeg"
              alt="Membership Ads Listings"
              className="w-full transition-transform duration-300 transform group-hover:scale-110"
            />
            <div
              className="absolute bottom-0 left-0 w-full px-4 py-2 text-lg font-semibold text-white bg-gray-900 bg-opacity-60"
            >
              MEMBERSHIP AND PAID ADS LISTINGS
            </div>
          </div>
        </div>

        {/* Social Media Icons (Responsive) */}
        <div className="absolute flex flex-col space-y-10 text-xl text-gray-300 right-6 md:right-8 top-1/5 md:top-1/4">
          <a href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-blue-600">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
