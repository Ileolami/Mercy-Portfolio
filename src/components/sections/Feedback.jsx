import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackSection = ({ title, projects, isEven }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "gap-6",
    dotsClass: "slick-dots !bottom-[-2rem]",
  };

  return (
    <div className={`w-full py-16 ${isEven ? "bg-[#2b0966]" : "bg-[#2b1e42]"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-thistle">
          {title} ✍🏽
        </h2>

        <div className="relative px-4">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-3">
                <div
                  className={`${
                    isEven ? "bg-[#2b1e42]" : "bg-[#2b0966]"
                  } text-thistle p-8 rounded-lg shadow-xl h-full`}
                >
                  <img
                    src={project.image}
                    alt={project.title || "Feedback"}
                    className="w-full h-auto rounded-lg mb-4 md:w-[500px] md:h-[300px]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Feedback = () => {
  const projectCategories = {

    pastSpeakingEngagements: {
      title: "Past Speaking Engagements",
      projects: [
        {
          image: "/assets/20240910_134529.jpg"
        },
        {
          image: "/assets/20250324_123725.jpg"
        },
        {
          image: "/assets/IMG_0737.JPG"
        },
        {
          image: "/assets/Screenshot_20250324-123457.jpg"
        }
      ]
    },
  };

  return (
    <div className="flex flex-col w-full">
      {Object.entries(projectCategories).map(([key, category], index) => (
        <FeedbackSection
          key={key}
          title={category.title}
          projects={category.projects} 
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Feedback;