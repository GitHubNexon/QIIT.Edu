import React from 'react';

const LocationMap = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h2 className="text-gray-200 text-center mb-5">Our Location</h2>
      <iframe
        className="w-full h-[240px] sm:w-[320px] sm:h-[240px] md:w-[480px] md:h-[360px] lg:w-[600px] lg:h-[450px] xl:w-[600px] xl:h-[450px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5840.924352439706!2d121.05518490952159!3d14.731135880916487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b05f92e405b9%3A0x39240328c5d98ea9!2sNeopolitan%20Ave.%2C%20Novaliches%2C%20Quezon%20City%2C%20Metro%20Manila!5e1!3m2!1sen!2sph!4v1723290897626!5m2!1sen!2sph"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        width="600"
        height="450"
      ></iframe>
    </div>
  );
}

export default LocationMap;
