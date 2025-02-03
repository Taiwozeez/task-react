import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Testimonialmap from "../app/testimonialmap";

interface Testimonial {
  name: string;
  image: string;
  carImage: string;
  carAlt: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Tony Elumelu",
    image: "/testimony1.jpeg",
    carImage: "/testimony111.jpg",
    carAlt: "Red Car",
    quote:
"Shopping online with [Your Store Name] has been an amazing experience! The process is simple and seamless—no hassle, no stress. There’s no secret to finding great deals, just a reliable store with quality products and excellent service. I love how easy it is to shop from anywhere!"  },
  {
    name: "Michael Otedola",
    image: "/testimony2.jpeg",
    carImage: "/testimony111.jpg",
    carAlt: "Black Car",
    quote:
"I was skeptical about shopping online at first, but  Anthentic Store completely changed my experience! The website is easy to navigate, the products are exactly as described, and the delivery was super fast. Now, I do all my shopping here—it's convenient, reliable, and stress-free!"
  },
  {
    name: "Aliko Dangote",
    image: "/testimony3.jpeg",
    carImage: "/testimony111.jpg",
    carAlt: "Blue Car",
    quote:
"Shopping online has never been this easy! Anthentic Store offers a wide range of high-quality products at great prices. The checkout process was smooth, and my order arrived right on time. I highly recommend it to anyone looking for a hassle-free shopping experience!  😊🛍️"
  },
];

const Testimonialmap: React.FC = () => {
  useEffect(() => {
    // AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="py-12 text-gray-900 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-base font-semibold tracking-wide text-red-600 uppercase">
              What Our Happy Clients Say About Us
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              OUR TESTIMONIAL
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={`${testimonial.name}-${testimonial.carImage}`} // Unique key combining name and carImage
                  className="p-6 transition duration-300 transform bg-gray-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-red-50"
                  data-aos="fade-up"
                >
                  <img className="object-cover w-full h-40 rounded-t-lg" src={testimonial.carImage} alt={testimonial.carAlt} />
                  <div className="mt-6 text-center">
                    <img className="w-16 h-16 mx-auto rounded-full" src={testimonial.image} alt={testimonial.name} />
                    <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">{testimonial.name}</h3>
                    <p className="mt-4 text-base leading-6 text-gray-500">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-8 text-center text-white">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Find Us Here</h2>
            <p className="mt-2 text-lg">Visit our Stores and explore our amazing car collection. We're easy to find!</p>
          </div>
        </div>
        <div className="relative w-full h-96">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.115246115249!2d-122.42643868467772!3d37.77492917975852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c8debd911%3A0x5b7f705cf8b2254d!2s220%20E%20Front%20St%2C%20Burlington%2C%20NC%2027215%2C%20USA!5e0!3m2!1sen!2sin!4v1605243581245!5m2!1sen!2sin"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
        <div className="mt-8 text-center text-white">
          <p className="text-lg">We look forward to seeing you! Feel free to reach out if you need directions or more info.</p>
        </div>
      </section>
    </>
  );
};

export default Testimonialmap;
