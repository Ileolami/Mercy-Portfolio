import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Eye, Code } from "lucide-react";

const ProjectSection = ({ title, projects, isEven }) => {
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
    <div className={`w-full py-16 ${isEven ? 'bg-[#2b0966]' : 'bg-[#2b1e42]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-thistle">
          {title} 💼
        </h2>
        
        <div className="relative px-4">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-3">
                <div className={`${isEven ? 'bg-[#2b1e42]' : 'bg-[#2b0966]'} text-thistle p-8 rounded-lg shadow-xl h-full`}>
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${isEven ? 'bg-[#252a3a]' : 'bg-[#2a303c]'} text-gray-300 px-3 py-1 text-sm rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a
                      href={project.links.preview}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Eye size={16} />
                      <span>Preview</span>
                    </a>
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Code size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectCategories = {
    technicalArticles: {
      title: "Technical Articles",
      projects: [
        {
          title: "A Beginner's Guide to Dockerizing a Vite dApp Project",
          description: "An explanatory article on how to dockerize a Vite dApp project.",
          tags: ["Docker", "Blockchain", "Web3", "dApp"],
          links: { preview: "https://hackernoon.com/a-beginners-guide-to-dockerizing-a-vite-dapp-project" },
        },

        {
          title: "How to Integrate Smart Contracts to the Frontend",
          description: "A step by step guide on how to integrate smart contracts to the frontend.",
          tags: ["Smart Contracts", "Web3", "Frontend", "Blockchain", "dApp"],
          links: { preview: "https://hackernoon.com/how-to-integrate-smart-contracts-to-the-frontend" },
        },

        {
          title: "Build a Real-time Crypto Tracker with Coingecko API and ReactJS",
          description: "A step by step guide on how to build a real-time crypto tracker with Coingecko API and ReactJS.",
          tags: ["Coingecko", "API", "ReactJS", "Web3"],
          links: { preview: "https://hackernoon.com/build-a-real-time-crypto-tracker-with-coingecko-api-and-reactjs" },
        },

        {
          title: "How to Build a Telegram Bot That Queries Rootstock Data Using Rootstock RPC API",
          description: "A step by step guide on how to build a Telegram bot that queries Rootstock data using Rootstock RPC API.",
          tags: ["Telegram Bot", "Rootstock", "RPC API"],
          links: { preview: "https://hackernoon.com/how-to-build-a-telegram-bot-that-queries-rootstock-data-using-rootstock-rpc-api" },
        },
        {
          title: "How to Convert Your API Documentation to an OpenAPI in Less Than 5 Minutes",
          description: "A step by step guide on how to convert your API documentation to an OpenAPI in less than 5 minutes.",
          tags: ["API Documentation", "OpenAPI", "OAS"],
          links: { preview: "https://hackernoon.com/how-to-convert-your-api-documentation-to-an-openapi-in-less-than-5-minutes" },
        },
        {
          title: "Decharge: Deep Dive on the opportunities for electric energy storage in Nigeria",
          description: "A research paper on the opportunities for electric energy storage in Nigeria.",
          tags: ["Energy Storage", "Electricity", "Nigeria"],
          links: { preview: "https://ileolami.hashnode.dev/decharge-deep-dive-on-the-opportunities-for-electric-energy-storage-in-nigeria" },
        },
        {
          title: "How to Create Google Login Using Google Auth API with ReactJS",
          description: "A step by step guide on how to create Google login using Google Auth API with ReactJS.",
          tags: ["Google Auth API", "ReactJS", "Authentication"],
          links: { preview: "https://ileolami.hashnode.dev/how-to-create-google-login-using-google-auth-api-with-reactjs" },
        },
        
       
        
      ],
    }, 
    apiDocumentation: {
      title: "API Documentation",
      projects: [
        {
          title: "The Movie Database API Reference",
          description: "Comprehensive API documentation for The Movie Database API, including authentication and endpoint details.",
          tags: ["API", "Postman", "Mintlify"],
          links: { preview: "https://ileolami.mintlify.app/the-basics/introduction" },
        },
        {
          title: "Twillo API Reference",
          description: "Comprehensive API documentation for Twillo, including authentication, and endpoints details",
          tags: ["API", "ReadMe"],
          links: { preview: "https://twillo-api.readme.io/reference/getting-started-with-your-api" },
        },
        {
          title: "Plaid API Reference",
          description: "Comprehensive API documentation for Plaid API, including authentication and endpoint details.",
          tags: ["API", "Postman"],
          links: { preview: "https://documenter.getpostman.com/view/32923208/2sAYBUDsTy" },
        },
      
      ],
    },
  
    openSourceContributions: {
      title: "Open Source Contributions",
      projects: [
        {
          title: "TWMP Markdown Course",
          description: (
            <>
              Contributed to the TWMP Markdown course, authored the{" "}
              <a
                href="https://technicalwritingmp.com/docs/markdown-course/getting-started-with-markdown/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Getting started with Markdowns
              </a>{" "}
              section and course assignment sections.
            </>
          ),
          tags: ["Markdown", "API Documentation", "Technical Writing"],
          links: { preview: "https://technicalwritingmp.com/docs/markdown-course/authors/" },
        },
        {
          title: "Stellar Documentation",
          description: (
            <>
              Contributed to the {" "}
              <a
                href="https://github.com/stellar/stellar-docs/commit/e40662c078f1b1c8b47a88ef4d0984f4f020d9bf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                build section
              </a>{" "}
               by correcting and fix content flow and readability . 
            </>
          ),
          tags: ["Markdown", "Developer Doc", "Technical Writing"],
          links: { preview: "https://developers.stellar.org/docs/build" },
        },
        {
          title: "Vaunt Documentation",
          description: (
            <>
              Contributed to the{" "}
              <a
                href="https://github.com/VauntDev/docs/issues/40"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                README.md
              </a>{" "}
              by adding `npm` installation process and reorganizing the content.
            </>
          ),
          tags: ["Markdown", "Developer Documentation", "Technical Writing"],
          links: { preview: "https://github.com/VauntDev" },
        },
      ]
    },
  };

  return (
    <div className="flex flex-col w-full">
      {Object.entries(projectCategories).map(([key, category], index) => (
        <ProjectSection 
          key={key} 
          title={category.title} 
          projects={category.projects}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Projects;