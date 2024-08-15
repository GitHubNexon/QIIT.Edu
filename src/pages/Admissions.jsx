import React from "react";
import admissionBanner from "../assets/image/banners/admission-banner.png";
import { FaClipboardList, FaUserGraduate, FaCheckCircle } from "react-icons/fa";

const Admissions = () => {
  return (
    <div className="mx-auto">
      {/* Banner Section */}
      <div className="relative">
        <img
          src={admissionBanner}
          alt="Admissions Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="px-4 py-8 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
          Admission Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Application Step */}
          <div className="flex flex-col items-center text-center">
            <FaClipboardList className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Application</h3>
            <p className="text-gray-600">
              Submit your application form, including personal details, academic
              records, and other documents.
            </p>
          </div>

          {/* Entrance Exams Step */}
          <div className="flex flex-col items-center text-center">
            <FaUserGraduate className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Entrance Exams</h3>
            <p className="text-gray-600">
              Take the required entrance exams or standardized tests to qualify
              for the admission process.
            </p>
          </div>

          {/* Interviews Step */}
          <div className="flex flex-col items-center text-center">
            <FaClipboardList className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interviews</h3>
            <p className="text-gray-600">
              Participate in interviews if required, to assess your suitability
              for the program.
            </p>
          </div>

          {/* Selection Criteria Step */}
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-4xl text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Selection Criteria</h3>
            <p className="text-gray-600">
              Institutions will evaluate your application based on academic
              performance, test scores, and more.
            </p>
          </div>

          {/* Admission Offer Step */}
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Admission Offer</h3>
            <p className="text-gray-600">
              If selected, you will receive an offer of admission, which you can
              accept or decline.
            </p>
          </div>

          {/* Enrollment Step */}
          <div className="flex flex-col items-center text-center">
            <FaUserGraduate className="text-4xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enrollment</h3>
            <p className="text-gray-600">
              Complete the enrollment process by submitting documents, paying
              fees, and registering for courses.
            </p>
          </div>
        </div>
      </div>
      {/* ENROLLMENT FORM */}
    </div>
  );
};

export default Admissions;
