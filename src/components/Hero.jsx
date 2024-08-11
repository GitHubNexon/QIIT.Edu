import React from "react";
import "../components/styles/Hero.css";
import "../components/custom/card.css";
import img1 from "../assets/image/img-1.jpg";
import img2 from "../assets/image/img-2.jpg";
import img3 from "../assets/image/img-3.jpg";
import img4 from "../assets/image/img-4.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative custom-bg-4 h-full w-full border-x-slate-900">
        <div className="flex justify-center py-10 items-center flex-col">
          <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 md:px-7">
            Welcome to Quantum Innovations Institute of Technology
          </h1>
        </div>
        <div className="flex flex-col lg:flex-col xl:flex-row py-10 items-center justify-center lg:space-x-6 space-y-6 lg:space-y-0 lg:px-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-x-24">
            {/* card-1 */}
            <div className="card-container" data-aos="flip-right">
              <div className="card">
                <img src={img1} alt="" />
                <div className="card__content">
                  <p className="card__title">Card Title1</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="card-container" data-aos="flip-left">
              <div className="card">
                <img src={img2} alt="" />
                <div className="card__content">
                  <p className="card__title">Card Title2</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className="card-container" data-aos="flip-right">
              <div className="card">
                <img src={img3} alt="" />
                <div className="card__content">
                  <p className="card__title">Card Title3</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
            {/* card-4 */}
            <div className="card-container" data-aos="flip-left">
              <div className="card">
                <img src={img4} alt="" />
                <div className="card__content">
                  <p className="card__title">Card Titl4</p>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-900 font-bold text-center lg:text-justify py-4 w-full md:w-[500px] px-4 md:px-8 lg:px-0 lg:w-[500px]" data-aos="zoom-in-up">
            Imagine a high-tech, futuristic campus bustling with energy and
            innovation. Picture sleek, modern buildings with glass facades
            reflecting the vibrant city skyline. Within this campus, dynamic
            images of students are seen working with advanced technology,
            illustrating a diverse group of young minds collaborating on
            cutting-edge projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
