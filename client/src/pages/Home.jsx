import React, { useEffect } from "react";
import '../components/custom/parallax.css'
import videoFile from "../assets/videos/hero-video.mp4";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import BoardMembers from "../sections/BoardMembers";
import NewsPageSection from "../sections/NewsPageSection";
import Footer from "../sections/Footer";


const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxBackground = document.querySelector('.parallax-background');
      if (parallaxBackground) {
        parallaxBackground.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <div className="parallax-container">
        <video
          className="parallax-background opacity-70"
          src={videoFile}
          autoPlay
          loop
          muted
          loading="lazy"
          playsInline
        />
      </div>
      
      <div className="content">
        <Hero />
        <Carousel />
        <BoardMembers />
        <NewsPageSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
