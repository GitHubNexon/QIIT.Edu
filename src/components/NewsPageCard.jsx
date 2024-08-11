import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaXTwitter, FaVideo } from "react-icons/fa6";

const DEFAULTS = {
  title: "News Page",
  description: "Latest news from QIIT",
  image: "/images/news-page.jpg",
  author: "QIIT",
  date: "2022-01-01",
  category: "News",
  videoLinks: "",
  facebookLinks: "",
  twitterLinks: "",
};

const NewsPageCard = ({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  image = DEFAULTS.image,
  author = DEFAULTS.author,
  date = DEFAULTS.date,
  category = DEFAULTS.category,
  videoLinks = DEFAULTS.videoLinks,
  facebookLinks = DEFAULTS.facebookLinks,
  twitterLinks = DEFAULTS.twitterLinks,
  ...props
}) => {
  return (
    <div className="mx-auto p-6 bg-white w-full ">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-base md:text-lg text-gray-600 mb-4">{description}</p>
      <img className="w-full h-auto rounded-lg mb-4" src={image} alt={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Author:</span> {author}
          </p>
          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Date:</span> {date}
          </p>
          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Category:</span> {category}
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          {videoLinks && (
            <a
              href={videoLinks}
              className="flex items-center text-gray-800 hover:scale-110 transform transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaVideo size={24} className="mr-2" />
              <span className="font-semibold">Watch Video</span>
            </a>
          )}
          {facebookLinks && (
            <a
              href={facebookLinks}
              className="flex items-center text-blue-600 hover:scale-110 transform transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} className="mr-2" />
              <span className="font-semibold">share on Facebook</span>
            </a>
          )}
          {twitterLinks && (
            <a
              href={twitterLinks}
              className="flex items-center text-black hover:scale-110 transform transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} className="mr-2" />
              <span className="font-semibold">share on Twitter</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

NewsPageCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  videoLinks: PropTypes.string,
  facebookLinks: PropTypes.string,
  twitterLinks: PropTypes.string,
};

export default NewsPageCard;
