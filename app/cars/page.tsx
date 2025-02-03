"use client";
import React, { useState } from "react";

// Define types for the car data structure
interface Cars {
  id: number;
  name: string;
  image: string;
  originalPrice: string;
  discountedPrice: string;
  specs: string[];
}

interface Quantities {
  [id: string]: number;
}


const cars: Cars[] = [
  {
    id: 1,
    name: "2017 Audi A4 Prestige",
    image: "/cars4.jpeg", 
    originalPrice: "₦48,000,000",
    discountedPrice: "₦47,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 50,000 km",
    ],
  },
  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars5.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },
 
  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars6.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },

  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars7.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },

  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars8.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },

  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars9.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },

  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars10.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },

  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars11.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },

  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars12.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },

  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars13.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },

  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars5.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },

  {
    id: 2,
    name: "2020 BMW 3 Series",
    image: "/cars8.jpeg", 
    originalPrice: "₦50,000,000",
    discountedPrice: "₦49,000,000",
    specs: [
      "Engine: 2.0L Turbo",
      "Transmission: Automatic",
      "Mileage: 30,000 km",
    ],
  },
];

const Cars: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [quantities, setQuantities] = useState<Quantities>({});
  const [cartAlert, setCartAlert] = useState<boolean>(false);

  const handleIncrease = (id: number): void => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrease = (id: number): void => {
    setQuantities((prev) => {
      if (!prev[id] || prev[id] === 0) return prev;
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const handleAddToCart = (id: number): void => {
    if (quantities[id] && quantities[id] > 0) {
      setCartCount((prev) => prev + quantities[id]);
      setCartAlert(true);
      setTimeout(() => setCartAlert(false), 2000);
      setQuantities((prev) => ({ ...prev, [id]: 0 }));
    } else {
      alert("Please select at least one item before adding to cart.");
    }
  };

  return (
    <div className="px-4 ml-10">
      {/* Header Section */}
      <div
        className="container py-12 mx-auto text-white opacity-8"
        data-aos="fade-up"
      >
        <h1 className="mb-4 text-2xl text-center">Check out our recent cars</h1>
        <h2 className="mb-12 text-4xl text-center line-animation">
          FEATURE CAR
        </h2>
      </div>

      {/* Cart Count Display */}
      <div className=" cart-count">
        <p>
          Cart: <span>{cartCount}</span> items
        </p>
      </div>

      {cartAlert && (
        <div className="fixed top-0 left-0 w-full px-4 py-2 bg-green-500 text-white text-center rounded-md transition-opacity opacity-100 text-2xl z-10">
          Item added to cart!
        </div>
      )}

      {/* Car Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className="relative p-4 text-black transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl group"
          >
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="object-cover w-full h-56 transition-transform duration-300 rounded-t-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-sm text-white transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100">
                {car.specs.map((spec, index) => (
                  <p key={index}>{spec}</p>
                ))}
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{car.name}</h3>
            <p className="text-gray-500 line-through">{car.originalPrice}</p>
            <p className="font-bold text-red-500">{car.discountedPrice}</p>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => handleDecrease(car.id)}
                className="w-8 h-8 text-xl text-white bg-green-500 rounded-md hover:scale-110"
              >
                -
              </button>
              <span className="font-bold">{quantities[car.id] || 0}</span>
              <button
                onClick={() => handleIncrease(car.id)}
                className="w-8 h-8 text-xl text-white bg-green-500 rounded-md hover:scale-110"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleAddToCart(car.id)}
              className="w-full py-2 mt-4 text-white bg-pink-500 rounded-lg transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
