import React from "react";
import bachelor from "../data/bachelor";
import BachelorsCard from "../components/BachelorsCard";

const Bachelors = () => {
  return (
    <div className="mx-auto py-8">
      <h2 className="pb-20 text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
      Bachelor's Programs Overview
      </h2>
      <p className="text-center text-gray-600 mb-20 mx-10">
        At Quantum Innovation Institute of Technology, our bachelor's programs
        provide a solid foundation for academic and professional success.
        Offering a diverse range of undergraduate degrees, from Computer Science
        to Environmental Science, our curriculum is designed to equip students
        with both theoretical knowledge and practical skills. Our programs
        emphasize critical thinking, innovation, and hands-on experience,
        preparing graduates to thrive in their chosen fields and make meaningful
        contributions to society.
      </p>
      <div className="mx-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center">
        {bachelor.map((bachelorItem, index) => (
          <BachelorsCard
            key={index}
            title={bachelorItem.title}
            description={bachelorItem.description}
            image={bachelorItem.image}
            link={bachelorItem.link}
            courseList={bachelorItem.courseList}
          />
        ))}
      </div>
    </div>
  );
};

export default Bachelors;
