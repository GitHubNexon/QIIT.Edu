import React from "react";
import PropTypes from "prop-types";

const DEFAULTS = {
  title: "Research Projects",
  description: "View and learn about our diverse research projects.",
  author: "QIIT",
  date: "2022-01-01",
  category: "Research",
  videoLinks: "",
  image: "/images/research-projects.jpg",
  link: "/research-projects",
};

const ResearchProjects = ({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  author = DEFAULTS.author,
  date = DEFAULTS.date,
  category = DEFAULTS.category,
  videoLinks = DEFAULTS.videoLinks,
  image = DEFAULTS.image,
  link = DEFAULTS.link,
}) => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden md:mx-4 max-sm:mx-4">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          <a href={link} target="_blank">{title} </a>
        </h2>
        <div className="flex items-center mt-2 max-sm:flex-col max-sm:items-start">
          <p className="text-gray-500">{author}</p>
          <span className="mx-2 text-gray-400">|</span>
          <p className="text-gray-500">{date}</p>
          <span className="mx-2 text-gray-400">|</span>
          <p className="text-blue-600">{category}</p>
        </div>
        <p className="mt-4 text-gray-700">{description}</p>
        {videoLinks && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Watch Related Videos:
            </h3>
            <div className="mt-2 space-y-2 space-x-3">
              {videoLinks.split(",").map((link, index) => (
                <a
                  key={index}
                  href={link.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Video{index + 1}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ResearchProjects.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  videoLinks: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default ResearchProjects;
