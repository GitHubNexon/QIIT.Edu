import React from "react";
import AboutComponent from "../components/AboutComponent";
import aboutData from "../data/aboutData";

const AboutSection = () => {
  return (
    <div className="flex items-center flex-col">
      <h2 className="text-gray-900 text-center py-5 font-bold text-5xl">ABOUT US</h2>
      <div className="grid gap-4">
        {aboutData.map((about, index) => (
          <AboutComponent
            key={index}
            title={about.title}
            description={about.description}
            imgSrc={about.imgSrc}
          />
        ))};
      </div>
    </div>
  );
};

export default AboutSection;
