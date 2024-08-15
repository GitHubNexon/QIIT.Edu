import React, { useState } from "react";
import emailjs from "emailjs-com";

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    field: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData); // Log form data

    const serviceID = "service_77s36as";
    const templateID = "template_iy4fh4i";
    const userID = "WZOFi-aPfQkLLCucR";

    const templateParams = {
      applicant_name: formData.name,
      applicant_email: formData.email,
      program_name: formData.program,
      specific_field: formData.field,
    };

    console.log("Template Params:", templateParams); // Log the parameters

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your enrollment email has been sent!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("There was an error sending the email. Please try again later.");
      });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Enroll in Our Program</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="program">
            Program
          </label>
          <input
            type="text"
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="field">
            Field of Interest
          </label>
          <input
            type="text"
            id="field"
            name="field"
            value={formData.field}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnrollForm;
