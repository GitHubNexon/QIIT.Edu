// Research.js
import React from "react";
import BannerCarousel from "../components/BannerCarousel";
import ResearchBannerImages from "../data/ResearchImagesBanner";
import ResearchSection from "../sections/ResearchSection";
import Footer from "../sections/Footer";

const Research = () => {
  return (
    <div className="mx-auto">
      <BannerCarousel images={ResearchBannerImages} />
      <ResearchSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Research;
