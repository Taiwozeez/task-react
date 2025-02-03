import React from "react";

const Filter = () => {
  return (
    <section
      className="relative text-gray-900 bg-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute inset-0 bg-black"></div>
      <div className="relative z-10 px-6 py-10 mx-auto max-w-7xl lg:px-10">
        <div className="p-6 bg-white rounded-lg shadow-lg lg:p-8">
          <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Select Category", options: ["Clothing", "Shoes", "Jewelry", "Accessories"], color: "blue" },
              { label: "Select Brand", options: ["Nike", "Adidas", "Zara", "H&M"], color: "green" },
              { label: "Select Size", options: ["S", "M", "L", "XL"], color: "red" },
              { label: "Select Color", options: ["Red", "Blue", "Black", "White"], color: "yellow" },
              { label: "Select Material", options: ["Cotton", "Leather", "Wool", "Polyester"], color: "purple" },
              { label: "Select Condition", options: ["New", "Used", "Certified Pre-Owned"], color: "indigo" },
            ].map(({ label, options, color }, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <label className="block mb-2 text-sm text-gray-600">{label}</label>
                <select
                  className={`w-full p-2 border border-${color}-500 rounded hover:border-${color}-600 focus:outline-none focus:ring-2 focus:ring-${color}-300`}
                >
                  <option>--Select--</option>
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Price and Search Button */}
          <div
            className="flex flex-col items-center justify-between mt-6 lg:flex-row"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="text-gray-600">
              <span className="font-semibold">Price: </span>
              <span>₦10,000 - ₦50,000</span>
            </div>
            <button className="px-5 py-2 mt-4 text-white transition duration-300 ease-in-out bg-pink-600 rounded lg:mt-0 hover:bg-pink-700">
              Search Items
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
