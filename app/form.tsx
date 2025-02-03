import React, { useState } from "react";
import "../app/form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'; // Debit/Credit Card Icon
import { faPaypal } from '@fortawesome/free-brands-svg-icons';  // PayPal Icon




interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  billingAddress: string;
  billingAddressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isShippingSame: boolean;
  paymentMethod: string;
}

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    billingAddress: "",
    billingAddressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    isShippingSame: false,
    paymentMethod: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessAlert(true);
  };

  return (
    <section className="flex max-w-5xl p-4 mx-auto mt-10 mb-40 text-black bg-white">
      {/* Success Alert */}
      {showSuccessAlert && (
        <div
          id="success-alert"
          className="absolute top-0 left-0 w-full p-4 mb-4 text-green-800 bg-green-200 border border-green-400 rounded-t-md"
          role="alert"
        >
          <strong>Success!</strong> Your form has been submitted.
        </div>
      )}

      {/* Cover Image Section */}
      <div
        className="flex-1 bg-center bg-cover hide-on-mobile"
        style={{ backgroundImage: "url('/formbg.jpeg')", borderRadius: "10px" }}
      ></div>

      {/* Form Section */}
      <div className="flex-1 mt-6">
        <form id="order-form" className="ml-8 space-y-4" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-left">Product Order</h1>

          {/* Personal Information */}
          <div className="flex space-x-4 text-black">
            <div className="w-1/2">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="contact-number" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="text"
              id="contact-number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Billing Address */}
          <div>
            <label htmlFor="billing-address" className="block text-sm font-medium text-gray-700">Billing Address</label>
            <input
              type="text"
              id="billing-address"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="billing-address-line2" className="block text-sm font-medium text-gray-700">Street Address Line 2</label>
            <input
              type="text"
              id="billing-address-line2"
              name="billingAddressLine2"
              value={formData.billingAddressLine2 || ""}
              onChange={handleChange}
              className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/3">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="w-1/3">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="w-1/3">
              <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Postal / Zip Code</label>
              <input
                type="text"
                id="postal-code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="block w-full mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Please Select</option>
              <option value="NG">Nigeria</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
              <option value="ZA">South Africa</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="IT">Italy</option>
            </select>
          </div>

          {/* Shipping Address Same as Billing Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Is shipping address same as billing address?</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  id="yes"
                  name="isShippingSame"
                  type="radio"
                  value="true"
                  onChange={() => setFormData({ ...formData, isShippingSame: true })}
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  required
                />
                <label htmlFor="yes" className="block ml-3 text-sm font-medium text-gray-700">Yes</label>
              </div>

              <div className="flex items-center">
                <input
                  id="no"
                  name="isShippingSame"
                  type="radio"
                  value="false"
                  onChange={() => setFormData({ ...formData, isShippingSame: false })}
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  required
                />
                <label htmlFor="no" className="block ml-3 text-sm font-medium text-gray-700">No</label>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Methods</label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  id="debit-credit"
                  name="paymentMethod"
                  type="radio"
                  value="debit-credit"
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  required
                />
                <label htmlFor="debit-credit" className="block ml-3 text-sm font-medium text-gray-700">
                  <FontAwesomeIcon icon={faCreditCard} /> Debit or Credit Card
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  value="paypal"
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  required
                />
                <label htmlFor="paypal" className="block ml-3 text-sm font-medium text-gray-700">
                  <FontAwesomeIcon icon={faPaypal} /> PayPal
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;