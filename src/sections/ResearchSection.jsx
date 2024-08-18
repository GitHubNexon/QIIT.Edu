import React from "react";
import ResearchProjects from "../components/ResearchProjects";
import researchData from "../data/researchData";


const ResearchSection = () => {
  return (
    <>
      <div className="mx-auto py-8 custom-bg-4 w-full h-full">
        <h2 className="text-gray-900 text-center py-5 font-bold text-5xl uppercase">
        Pioneering Quantum Frontiers
        </h2>
        <div className="space-y-8">
          {researchData.map((project, index) => (
            <ResearchProjects
              key={index} // Ensure each component has a unique key
              title={project.title}
              description={project.description}
              author={project.author}
              date={project.date}
              category={project.category}
              videoLinks={project.videoLinks}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResearchSection;
