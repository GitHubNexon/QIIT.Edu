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
    <div className="flex flex-col xl:flex-row items-center justify-center p-5 xl:space-x-2 lg:space-x-2 md:space-y-2 sm:space-y-2">
      <div className="w-full xl:w-1/2 h-auto xl:h-[500px]">
        <img
          src={imgSrc}
          alt=""
          className="w-full h-full rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="w-full xl:w-1/2 h-auto flex items-center justify-center">
        <div className="p-6 bg-white  w-full h-full flex flex-col justify-center">
          <h2 className="text-gray-800 text-xl md:text-2xl xl:text-3xl font-semibold mb-4">
            {title}
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>
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
