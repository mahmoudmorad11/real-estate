import { assets, projectsData } from "../assets/assets";
import { useEffect, useState } from "react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
      updateCardsToShow();
    };

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("reseize", updateCardsToShow);
  }, []);

  const nextBtn = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="container mx-auto flex flex-col items-center pt-20 justify-center w-full overflow-hidden p-10"
      id="Projects"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-4">
        Projects
        <span className="font-light underline underline-offset-4 under">
          Completed
        </span>
      </h2>
      <p className="text-gray-500 text-center max-w-80 mb-8">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>
      {/*Slider Button */}
      <div className="flex justify-end items-center mb-8 w-full">
        <div
          className="p-3 bg-gray-300 mr-2 cursor-pointer"
          aria-label="Previous Project"
          onClick={prevBtn}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </div>
        <div
          className="p-3 bg-gray-300 cursor-pointer"
          aria-label="Next Project"
          onClick={nextBtn}
        >
          <img src={assets.right_arrow} alt="Next" />
        </div>
      </div>
      {/*Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={project.image} alt={project.title} className="mb-14" />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center ">
                <div className="bg-white w-3/4 px-4 py-2 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {project.price} <span> | </span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
