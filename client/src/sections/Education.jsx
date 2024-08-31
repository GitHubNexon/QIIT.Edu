import React from "react";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/teaching");
  };

  const handleLCollegeClick = () => {
    navigate("/college-resources");
  };

  const handleK12Click = () => {
    navigate("/k-12-resources");
  };

  return (
    <>
      {/* First Section: Teaching and Learning */}
      <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl lg:text-5xl">
            Teaching and Learning
          </h2>
          <p className="mt-4 text-lg text-center text-gray-700 sm:text-xl lg:text-2xl">
            At Quantum Innovation Institute of Technology, we foster an
            environment of innovation and creativity where students are
            empowered to explore the latest advancements in technology. Our
            teaching methods blend traditional education with cutting-edge
            digital tools, preparing students for the future of tech.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              className="bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <img
            src="https://media.licdn.com/dms/image/D4E12AQGYKoC-4QppEw/article-cover_image-shrink_720_1280/0/1718783291549?e=2147483647&v=beta&t=OeLOqi6wzohEqGjd_8rRZMoYb5pswm4loR5Of0a5CEk"
            alt="Teaching and Learning"
            className="w-full max-w-md sm:max-w-lg lg:max-w-2xl"
          />
        </div>
      </div>

      {/* Second Section: College and K-12 Resources */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl lg:text-5xl">
            College and K-12 Resources
          </h2>
          <p className="mt-4 text-lg text-center text-gray-700 sm:text-xl lg:text-2xl">
            Quantum Innovation Institute of Technology offers a wealth of
            resources to support both college and K-12 education. From
            state-of-the-art laboratories to comprehensive online learning
            platforms, our resources are designed to enhance the educational
            experience for all students.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800"
              onClick={handleLCollegeClick}
            >
              Explore College Resources
            </button>
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800"
              onClick={handleK12Click}
            >
              Explore K-12 Resources
            </button>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <img
            src="https://media.licdn.com/dms/image/D4E12AQGYKoC-4QppEw/article-cover_image-shrink_720_1280/0/1718783291549?e=2147483647&v=beta&t=OeLOqi6wzohEqGjd_8rRZMoYb5pswm4loR5Of0a5CEk"
            alt="College and K-12 Resources"
            className="w-full max-w-md sm:max-w-lg lg:max-w-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Education;
