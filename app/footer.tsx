import React from 'react';
import Footer from './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faShoppingCart, faStore } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="p-8 text-white text-gray-900 bg-black bg-opacity-100" style={{ backgroundImage: "url('bgstore_img.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {/* Contact Information */}
        <div>
          <p className="mb-4 text-lg text-gray-200">
            Your one-stop destination for the best shopping experience. Find everything you need, from the latest trends to everyday essentials.
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Ade Laja Ave, Mall Plaza, Lagos
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faPhone} /> +2348027723084
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> support@athentic.com
          </p>
        </div>

        {/* Store Categories */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-gray-100">Store Categories</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:underline">Electronics</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:underline">Fashion</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:underline">Home & Living</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:underline">Beauty & Health</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:underline">Groceries</a>
            </li>
          </ul>
        </div>

        {/* Featured Products */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-gray-100">Featured Products</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:underline">Latest Smartphone Deals</a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:underline">Best Fashion Picks 2025</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-gray-100">Subscribe for Offers</h3>
          <p className="mb-4 text-gray-200">Stay updated on exclusive deals and discounts. Enter your e-mail and subscribe now.</p>
          <input type="email" placeholder="Enter your Email" className="w-full p-2 mb-2 text-white bg-gray-800 rounded-md" />
          <button className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">Subscribe</button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container grid grid-cols-1 gap-8 mx-auto mt-8 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-gray-100">Looking for the Best Deals?</h3>
          <p className="mb-4 text-gray-200">Shop our latest discounts and exclusive offers now.</p>
          <button className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">Shop Now</button>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-gray-100">Want to Sell with Us?</h3>
          <p className="mb-4 text-gray-200">Join our marketplace and reach thousands of customers daily.</p>
          <button className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">Start Selling</button>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 text-center">
        <h3 className="mb-4 text-xl font-semibold text-gray-100">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-300 transition-colors duration-300 hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 transition-colors duration-300 hover:text-blue-500">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 transition-colors duration-300 hover:text-blue-500">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
          <a href="#" className="text-gray-300 transition-colors duration-300 hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-8 text-center">
        <p>&copy; Copyright 2025 - Taiwo Adelaja</p>
        <p>
          <a href="#" className="text-gray-400 hover:underline">Privacy Policy</a> |
          <a href="#" className="text-gray-400 hover:underline">Terms and Conditions</a> |
          <a href="#" className="text-gray-400 hover:underline">Contact Us</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
