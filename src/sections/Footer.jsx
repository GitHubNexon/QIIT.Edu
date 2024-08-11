import React from "react";
import LocationMap from "../sections/LocationMap";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-700 p-8">
        {/* Social media links */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-gray-200 text-2xl mb-4">Follow us on</h1>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-gray-200 hover:text-blue-500 hover:scale-125 transform transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="text-gray-200 hover:text-pink-500 hover:scale-125 transform transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/?lang=en"
              target="_blank"
              className="text-gray-200 hover:text-black hover:scale-125 transform transition duration-300"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-gray-200 text-2xl mb-4">
            Contact Us
          </h1>
          <p className="text-gray-200 hover:scale-110 transform transition duration-300">
            Email: contact@qiit.edu
          </p>
          <p className="text-gray-200 hover:scale-110 transform transition duration-300">
            Phone: +123 456 7890
          </p>
          <p className="text-gray-200 hover:scale-110 transform transition duration-300">
            Address: 123 Quantum Rd, Innovate City, Techland
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-gray-200 text-2xl mb-4">
            Subscribe to our Newsletter
          </h1>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className=" hover:scale-110 transform transition duration-300 p-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Location map */}
      <div className="bg-gray-800 p- flex items-center justify-center">
        <LocationMap />
      </div>

      {/* Footer bottom */}
      <div className="bg-gray-900 w-full flex justify-center items-center flex-col py-4">
        <p className="text-gray-400 text-center">
          &copy; 2024 Quantum Innovation Institute of Technology. All rights
          reserved.
        </p>
        <p className="text-gray-400 text-center">
          Created using ReactJS, Tailwind CSS, Node.js, Google Maps, and other
          3rd Party Libraries.
        </p>
        <p className="text-blue-900 text-center font-extrabold ">
          This is for project purposes only, not a real institute.
        </p>
      </div>
    </>
  );
};

export default Footer;
