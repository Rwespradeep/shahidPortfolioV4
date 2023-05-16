import React from "react";

const Aboutme = () => {
  return (
    <div className="flex flex-col justify-center items-center md:relative m-5 lg:flex lg:flex-row lg:relative lg:h-screen md:top-[20px] md:justify-center lg:top-1/4 lg:left-24 lg:w-screen lg:overscroll-hidden">
      <div className="hidden md:flex md:justify-center lg:block lg:w-1/2 lg:flex-1 lg:text-[#4F4F4F]">
        <img
          className="md:w-25 md:m-10 md:p-10 lg:w-[600px]"
          src="./aboutme_images/about_me1.webp"
          alt="aboutme_image"
        />
      </div>

      <div className="relative text-center w-80 text-[#4F4F4F] md:absolute md:top-1/4 md:-left-1.5 md:text-white lg:relative lg:justify-normal lg:top-2 lg:-left-2 lg:w-1/2 lg:flex-1 lg:text-[#4F4F4F]">
        <h1 className="absolute ml-20 text-3xl tracking-wider text-center top-2 bottom-2 font-figtree md:text-start md:text-2xl lg:text-4xl lg:h-20 lg:ml-1 lg:w-15 lg:text-start">
          ABOUT ME
        </h1>
        <p className="relative font-oswald top-12 lg:text-start lg:text-lg lg:font-light lg:tracking-widest lg:pt-5 lg:m-1">
          NATURE ITSELF INSPIRES ME
        </p>
        <div className="relative top-16 lg:top-8 text-center md:w-[600px] md:ml-14 lg:-ml-5 p-5 lg:w-[550px]">
          <p className="text-sm text-justify font-figtree md:text-base lg:text-lg lg:text-justify lg:p-2">
            Hi There, I am shahid khan from vizag. I am a travel photographer. I
            have been pursuing photography from my childhood sharing similar
            kind of passion from my father. I used to take his camera and go to
            most happenning events in and around the city. This is my new
            venture as a professional photographer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
