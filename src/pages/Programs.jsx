import React from "react";

import Footer from "../sections/Footer";
import { useNavigate } from "react-router-dom";

const Programs = () => {
  const navigate = useNavigate();
  // Navigate to specific sub-pages on click events

  const handleBachelorClick = () => {
    navigate("/bachelors");
  };
  const handleMasterClick = () => {
    navigate("/masters");
  };


  return (
    <>
      <div className="mx-5 ">
    <h1 className="text-[50px] text-center mb-5">
        Complete Academic Programs Overview
    </h1>
    
    <p className="text-center text-gray-600 mb-20">
        At Quantum Innovation Institute of Technology, we offer a comprehensive range of educational programs designed to cater to students at every stage of their academic journey. Our offerings span from foundational high school education and senior high school specialization to undergraduate and graduate degrees. Whether you are embarking on your educational path with our high school programs or advancing your expertise with a bachelor's or master's degree, we provide a diverse array of programs that equip students with the knowledge and skills needed to excel in today’s rapidly evolving world. Explore our complete academic programs overview to discover how Quantum Innovation Institute of Technology can be the catalyst for your educational and professional success.
    </p>

    <section className="mb-20 flex flex-col items-center space-y-5">
        <h2 className="text-[40px] text-center mb-4">
            Junior High and Senior High School Programs
        </h2>
        <img className="w-[800px] h-auto rounded-lg mb-4" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay1zNTEtbmFtZS0zNjQ4MC1qb2I0LmpwZw.jpg" alt="" />
        <p className="text-gray-600 text-center mb-10">
            The educational journey at Quantum Innovation Institute of Technology begins with our robust junior high and senior high school programs. These programs are designed to build a strong foundation of knowledge and skills essential for future academic success. Our junior high school program emphasizes core subjects such as mathematics, science, language arts, and social studies. We also incorporate interdisciplinary projects and extracurricular activities to foster critical thinking, creativity, and teamwork among students. This stage is crucial for students as they develop fundamental academic skills and personal growth.
        </p>
        <p className="text-gray-600 text-center">
            As students advance to senior high school, they have the opportunity to specialize in various academic tracks and vocational courses. This specialization allows students to delve deeper into areas of interest, preparing them for higher education and future careers. Our senior high school curriculum is designed to be both challenging and supportive, providing students with the tools and knowledge necessary to succeed in a competitive academic environment.
        </p>
        <button
              className="bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800"
              // onClick={handleJuniorSeniorClick}
            >
              Explore Our Junior and Senior High Curriculum
            </button>
    </section>

    <section className="mb-20 flex flex-col items-center space-y-5">
        <h2 className="text-[40px] text-center mb-4">
            Bachelor's Degree Programs
        </h2>
        <img className="w-[800px] h-auto rounded-lg mb-4" src="https://www.shutterstock.com/image-photo/group-students-digital-tablet-laptop-600nw-2347371743.jpg" alt="" />
        <p className="text-gray-600 text-center mb-10">
            Following high school, Quantum Innovation Institute of Technology offers a diverse range of bachelor's degree programs. Our undergraduate programs are crafted to provide students with a thorough understanding of their chosen field of study, combining theoretical knowledge with practical application. Students pursuing a bachelor’s degree at our institution benefit from a curriculum that emphasizes both academic rigor and experiential learning. Our programs are designed to cultivate analytical and problem-solving skills, preparing graduates to enter the workforce or pursue advanced studies. We offer degrees in various disciplines, each designed to meet the demands of today’s dynamic job market and equip students with the competencies needed for professional success.
        </p>
        <button
              className="bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800"
              onClick={handleBachelorClick}
            >
              Explore Our Bachelor’s Degrees
            </button>
    </section>

    <section className="mb-20 flex flex-col items-center space-y-5">
        <h2 className="text-[40px] text-center mb-4">
            Master’s Degree Programs
        </h2>
        <img className="w-[800px] h-auto rounded-lg mb-4" src="https://media.istockphoto.com/id/1406888053/photo/a-group-of-cheerful-people-at-graduation-holding-diplomas-or-certificates-up-together-and.jpg?s=612x612&w=0&k=20&c=8LRkx77cpb1clqj2tHqOY--uO8Mj6DB8Qd1Y3RdDRyQ=" alt="" />
        <p className="text-gray-600 text-center mb-10">
            For those seeking to advance their education further, our master’s degree programs offer an opportunity to deepen expertise and specialize in a chosen field. Our graduate programs are structured to provide a comprehensive understanding of advanced concepts, research methodologies, and practical applications. Master’s students at Quantum Innovation Institute of Technology engage in rigorous coursework, research projects, and professional development activities. These programs are tailored to meet the needs of working professionals and full-time students alike, offering flexible learning options and a focus on real-world problem-solving. Graduates of our master’s programs emerge as leaders in their fields, equipped with the skills and knowledge necessary to drive innovation and make significant contributions to their professions.
        </p>
        <button
              className="bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800"
              onClick={handleMasterClick}
            >
              Explore Our Master’s Degrees
            </button>
    </section>
</div>
      <h2 className="text-4xl text-center my-[50px]">JUNIOR HIGH AND SENIOR HIGH TO BE POSTED!!!</h2>
      <Footer />
      
    </>
  );
};

export default Programs;
