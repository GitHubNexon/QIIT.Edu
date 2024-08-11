import React from "react";

const Teaching = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 sm:text-4xl lg:text-5xl text-center mb-8">
          Teaching and Learning at Quantum Innovation Institute of Technology
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          At Quantum Innovation Institute of Technology, our teaching philosophy
          is centered on nurturing creativity, critical thinking, and
          problem-solving skills. We believe that the future of education lies
          in a balanced approach that combines traditional instructional methods
          with innovative, technology-driven solutions. Our faculty are experts
          in their fields, and they are dedicated to providing a learning
          environment that challenges students to push the boundaries of their
          knowledge and explore new horizons in technology.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our curriculum is designed to be dynamic and adaptable, reflecting the
          ever-changing landscape of technology. We incorporate hands-on
          learning experiences, including lab work, projects, and internships,
          to ensure that our students not only gain theoretical knowledge but
          also practical skills that are directly applicable in the real world.
          By integrating real-world challenges into our teaching, we prepare our
          students to tackle complex problems and to be leaders in the tech
          industry.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          In addition to classroom instruction, we emphasize the importance of
          collaborative learning. Our students are encouraged to work in teams,
          share ideas, and develop solutions together. This approach not only
          enhances their learning experience but also prepares them for the
          collaborative nature of the tech industry. Through partnerships with
          leading tech companies, we offer our students access to the latest
          tools, technologies, and industry insights, giving them a competitive
          edge in their careers.
        </p>
        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <a
            href="https://www.csis.org/analysis/quantum-technology-applications-and-implications"
            className="text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quantum Technology Applications
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Quantum_engineering"
            className="text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quantum Technology Implications
          </a>
          <a
            href="https://www.forbes.com/sites/forbeshumanresourcescouncil/2022/10/10/the-potential-impact-of-quantum-level-dynamics-on-human-resources/"
            className="text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quantum Tech Innovations
          </a>
          <a
            href="https://thequantuminsider.com/2024/06/29/the-azure-quantum-resource-estimator-an-in-depth-look-at-an-important-quantum-tool/"
            className="text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Future of Quantum Technology
          </a>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
