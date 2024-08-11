import React from "react";
import AboutSection from "../sections/AboutSection";
import Footer from "../sections/Footer";
import Education from "../sections/Education";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/9YLSp_rebJ0?si=92z9a5dHD18DngyU",
    title: "Quantum Innovation Institute Video 1",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/pYcKapMW_lw?si=S1JfClTaJu3CLoHH",
    title: "Quantum Innovation Institute Video 2",
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-8 items-center justify-items-center">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative overflow-hidden sm:mx-10 md:mx-5 lg:mx-5 2xl:mx-5 object-contain sm:w-[400]"
            >
              <iframe
                width="560"
                height="315"
                className="max-sm:w-[400px] max-sm:h-[320px]"
                loading="lazy"
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          Quantum Innovation Institute of Technology
        </h2>
        <p className="text-center text-base md:text-lg lg:text-xl xl:text-2xl mb-8">
          At the Quantum Innovation Institute of Technology, we are at the
          forefront of technological advancement, shaping the future through
          cutting-edge research and education. Our institute stands out with a
          commitment to excellence in technology education, offering students an
          immersive learning experience with access to state-of-the-art
          facilities and industry-leading experts. Choosing our school means
          embracing a future where innovation and technology converge, providing
          you with the skills and knowledge necessary to excel in a rapidly
          evolving digital world. Join us and be a part of the next generation
          of tech leaders and innovators.
        </p>
      </div>
      <AboutSection />
      <Education />
      <Footer />
    </>
  );
};

export default AboutUs;
