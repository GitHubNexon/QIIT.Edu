import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const DEFAULTS = {
  title: "Master's Program Overview",
  description: "Explore the advanced studies and opportunities in our Master's degree programs.",
  image: "/images/masters-card.jpg",
  link: "/programs/masters-card",
};

const MastersCard = ({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  image = DEFAULTS.image,
  link = DEFAULTS.link,
  courseList = [],
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <div className="max-w-4xl border border-gray-200 rounded-lg overflow-hidden shadow-lg p-4 w-full flex flex-col space-y-4 bg-white hover:shadow-xl transition-shadow duration-300" data-aos="fade-up">
      <div className="relative w-full h-80">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-4 w-full h-full">
        <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <h4 className="text-gray-800 font-semibold">Courses Offered</h4>
        {courseList.length > 0 && (
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {courseList.map((course, index) => (
              <li key={index} className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">{course}</li>
            ))}
          </ul>
        )}
        {courseList.length === 0 && (
          <p className="text-gray-500">No courses listed at the moment. Check back soon!</p>
        )}
      </div>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Discover More
      </button>
    </div>
  );
};

MastersCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  courseList: PropTypes.arrayOf(PropTypes.string),
};

export default MastersCard;
