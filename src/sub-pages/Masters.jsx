import React from "react";
import masters from "../data/masters"; // Update this path to your Master's degree data
import MastersCard from "../components/MastersCard"; // Ensure this path is correct

const Masters = () => {
  return (
    <div className="mx-auto py-8">
      <h2 className="pb-20 text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
      Master’s Programs Overview
      </h2>
      <p className="text-center text-gray-600 mb-20 mx-10">
        Quantum Innovation Institute of Technology’s master’s programs are
        crafted for those seeking to deepen their expertise and advance their
        careers. Our graduate degrees span cutting-edge fields such as Data
        Science, Cybersecurity, and Robotics Engineering. With a focus on
        advanced research, strategic thinking, and professional development, our
        master’s programs are designed to challenge and inspire students,
        empowering them to lead and innovate in their respective industries.
      </p>
      <div className="mx-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center">
        {masters.map((masterItem, index) => (
          <MastersCard
            key={index}
            title={masterItem.title}
            description={masterItem.description}
            image={masterItem.image}
            link={masterItem.link}
            courseList={masterItem.courseList}
          />
        ))}
      </div>
    </div>
  );
};

export default Masters;
