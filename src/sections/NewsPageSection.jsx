// NewsPageSection.jsx
import React from "react";
import newsData from "../data/newsData";
import NewsPage from "../components/NewsPageCard";
import "../components/styles/Hero.css";

const NewsPageSection = () => {
  return (
    <>
      <div className="mx-auto py-8">
        <h2 className="pb-20 text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4 md:px-7">
          Latest News <br />
          from the Quantum Innovations Institute of Technology (QIIT)
        </h2>
        <div className="grid gap-4  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
          {newsData.map((news, index) => (
            <NewsPage
              key={index}
              title={news.title}
              description={news.description}
              image={news.image}
              author={news.author}
              date={news.date}
              category={news.category}
              videoLinks={news.videoLinks}
              facebookLinks={news.facebookLinks}
              twitterLinks={news.twitterLinks}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsPageSection;
