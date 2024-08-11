import React from "react";
import {
  FaBook,
  FaLaptopCode,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaCog, // Engineering icon
  FaBuilding, // Architecture icon
  FaFlask, // Science icon
} from "react-icons/fa";

import { SiLibreofficemath } from "react-icons/si";

const K12Resources = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center pb-10">
        Empowering Students with Comprehensive K-12 Resources
      </h1>
      <p className="font-bold mb-6 text-center pb-10">
        At the Quantum Innovation Institute of Technology, we understand that the journey through K-12 education is enriched by access to a diverse range of resources designed to support both academic and personal growth. Our comprehensive suite of K-12 resources includes engaging educational materials, interactive learning tools, and specialized support services. Whether you're seeking help with coursework, exploring new subjects, or in need of additional guidance, our resources are here to provide the assistance you need to excel in your academic journey.
      </p>

      <h1 className="text-2xl font-bold mb-6">K-12 Resources</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <a href="https://example.com/books" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaBook className="text-4xl mb-4 text-blue-500" />
            <h2 className="text-lg font-semibold">Books</h2>
          </a>
          <img
            src="https://cdn.kobo.com/book-images/0cb3452f-8581-4d15-a536-e34a56745236/353/569/90/False/introductory-quantum-physics-and-relativity-second-edition.jpg"
            alt="Books"
            className="w-full h-full mt-2 object-fill"
          />
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <a href="https://example.com/programming" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaLaptopCode className="text-4xl mb-4 text-green-500" />
            <h2 className="text-lg font-semibold">Programming</h2>
          </a>
          <img
            src="https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4218-6?as=webp"
            alt="Programming"
            className="w-full h-full mt-2 object-fill"
          />
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <a href="https://example.com/graduation" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaGraduationCap className="text-4xl mb-4 text-red-500" />
            <h2 className="text-lg font-semibold">Graduation</h2>
          </a>
          <img
            src="https://i.pinimg.com/474x/11/53/7f/11537ff3f00ef35fb538d15e61105150.jpg"
            alt="Graduation"
            className="w-full h-full mt-2 object-fill"
          />
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <a href="https://example.com/teaching" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaChalkboardTeacher className="text-4xl mb-4 text-purple-500" />
            <h2 className="text-lg font-semibold">Teaching</h2>
          </a>
          <img
            src="https://www.worldscientific.com/action/showCoverImage?doi=10.1142/11938"
            alt="Teaching"
            className="w-full h-full mt-2 object-fill"
          />
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <a href="https://example.com/engineering" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaCog className="text-4xl mb-4 text-gray-500" />
            <h2 className="text-lg font-semibold">Engineering</h2>
          </a>
          <img
            src="https://assets.cambridge.org/97805211/13694/cover/9780521113694.jpg"
            alt="Engineering"
            className="w-full h-full mt-2 object-fill"
          />
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <a href="https://example.com/architecture" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaBuilding className="text-4xl mb-4 text-orange-500" />
            <h2 className="text-lg font-semibold">Computer Architecture</h2>
          </a>
          <img
            src="https://images.booksense.com/images/266/423/9789389423266.jpg"
            alt="Architecture"
            className="w-full h-full mt-2 object-fill"
          />
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <a href="https://example.com/science" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaFlask className="text-4xl mb-4 text-yellow-500" />
            <h2 className="text-lg font-semibold">Science</h2>
          </a>
          <img
            src="https://jrosspub.com/wp-content/uploads/2023/07/9781604271997-scaled.jpg"
            alt="Science"
            className="w-full h-full mt-2 object-fill"
          />
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <a href="https://example.com/mathematics" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <SiLibreofficemath className="text-4xl mb-4 text-teal-500" />
            <h2 className="text-lg font-semibold">Mathematics</h2>
          </a>
          <img
            src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-99-5894-8"
            alt="Mathematics"
            className="w-full h-full mt-2 object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default K12Resources;
