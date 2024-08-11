import React from "react";
import PropTypes from "prop-types";

const DEFAULTS = {
  imgSrc: "https://via.placeholder.com/250",
  name: "John Doe",
  position: "CEO",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cupiditate cum officiis quidem? Nisi similique numquam, excepturi iste mollitia doloribus perspiciatis, voluptatum ea ducimus eligendi quidem, aperiam laudantium velit sed.",
};

const BoardMemberCard = ({
  name = DEFAULTS.name,
  position = DEFAULTS.position,
  description = DEFAULTS.description,
  imgSrc = DEFAULTS.imgSrc,
}) => (
  <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg w-full h-full bg-white">
    <img src={imgSrc} alt={name} className="rounded-full w-32 h-32 mb-4" />
    <h2 className="text-2xl text-gray-600 mb-1">{name}</h2>
    <p className="text-xl text-gray-800 mb-2">{position}</p>
    <p className="text-base text-gray-900 text-center">{description}</p>
  </div>
);

BoardMemberCard.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default BoardMemberCard;
