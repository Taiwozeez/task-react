import { useEffect } from "react";
import Image from "next/image"; // Import the Image component

const PromoSection = () => {
  useEffect(() => {
    console.log("Initializing Promo...");
    // Temporarily remove to check if it causes the error
    // Promo.init({ duration: 1000 });
  }, []);

  console.log("Rendering PromoSection...");

  return (
    <div className="flex flex-wrap items-center justify-center p-4 mt-20 bg-white">
      {/* Image Section Left */}
      <div key="left-image" className="w-full p-2 md:w-1/4">
        <div data-aos="fade-right" data-aos-id="promo-left">
          <Image
            src="/promobag.png"
            alt="Stylish bag on display"
            className="w-full h-auto rounded-lg"
            width={500} // Define a width for the image
            height={500} // Define a height for the image
          />
        </div>
      </div>

      {/* Text Section */}
      <div key="text-section" className="w-full text-center md:w-1/2 bg-white">
        <div data-aos="fade-up" data-aos-id="promo-text">
          <h1 className="mb-4 text-6xl font-bold text-pink-600 shake-slow">
            PROMO
          </h1>
          <p className="mb-2 text-lg text-gray-600">
            Get the Stylish Outfit You’ve Always Wanted
          </p>
          <p className="mb-2 text-4xl font-bold text-pink-600">30% Off</p>
          <p className="mb-2 text-lg text-gray-600">On All Clothing & Accessories</p>
          <p className="mb-6 text-lg text-gray-600">LIMITED TIME OFFER!</p>
          <a href="#" className="font-bold text-pink-600 hover:underline">
            READ MORE
          </a>
        </div>
      </div>

      {/* Image Section Right */}
      <div key="right-image" className="w-full p-2 md:w-1/4 bg-white">
        <div data-aos="fade-left" data-aos-id="promo-right">
          <Image
            src="/promobag.png"
            alt="Stylish bag on display"
            className="w-full h-auto rounded-lg"
            width={500} // Define a width for the image
            height={500} // Define a height for the image
          />
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
