import React from "react";
import PropTypes from "prop-types";

const DEFAULTS = {
  imgSrc: "http://via.placeholder.com/1280x720",
  title: "About us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, neque ac finibus fermentum, justo dui pellentesque lectus, vel condimentum felis dolor vel turpis. Nunc vel lectus vel ligula sagittis sagittis.",
};

const AboutComponent = ({
  imgSrc = DEFAULTS.imgSrc,
  title = DEFAULTS.title,
  description = DEFAULTS.description,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-5 lg:space-y-0 lg:space-x-5 p-5">
      <img src={imgSrc} alt="" className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg object-contain" />
      <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-lg w-full lg:w-1/2 h-auto lg:h-full">
        <h2 className="text-gray-800 text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

AboutComponent.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default AboutComponent;
