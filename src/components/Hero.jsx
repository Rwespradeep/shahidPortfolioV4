import React, { useState } from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="max-h-md md:flex md:text-white lg:text-[#4F4F4F]">
        <div className="flex-1 md:w-full lg:w-1/2">
          {/* Navbar div below */}
          <div className="text-lg max-w-sm flex whitespace-nowrap justify-between gap-10 md:gap-20 lg:gap-20 ml-5 absolute top-10 z-50 text-white md:text-white lg:text-[#4F4F4F] md:top-0 md:flex md:justify-between font-oswald md:text-xl md:px-10 md:pt-10 md:ml-5 md:mr-64 tracking-tight">
            <Link to="/portfolio">
              <h1 className="transition-all duration-500 ease-out cursor-pointer hover:text-cyan-950 hover:scale-105">
                PORTFOLIO
              </h1>
            </Link>
            <Link to="/aboutme">
              <h1 className="transition-all duration-500 ease-out cursor-pointer hover:text-cyan-950 hover:scale-105">
                ABOUT ME
              </h1>
            </Link>
            <Link to="/contact">
              <h1 className="transition-all duration-500 ease-out cursor-pointer hover:text-cyan-950 hover:scale-105">
                CONTACT US
              </h1>
            </Link>
          </div>
          {/* Title div below */}
          <div className="absolute z-50 text-center top-1/2 left-1/4 md:text-center md:inset-0 md:top-3/4 lg:text-left lg:left-28 lg:top-72">
            <h2 className="font-oswald text-white md:text-white lg:text-[#4F4F4F] font-extrabold  z-50 text-xl md:text-5xl lg:text-4xl md:font-bold lg:font-light tracking-widest pb-5">
              SHAHID KHAN
            </h2>
            <h1 className="font-figtree text-white md:text-white lg:text-[#4F4F4F] text-2xl md:text-7xl">
              PHOTOGRAPHER
            </h1>
          </div>
        </div>
        <div className="w-full md:w-full lg:w-1/2 lg:flex-1">
          {/* Hero image carousel will come here */}
          <Carousel />
        </div>
      </div>
      <div className="hidden md:hidden lg:block md:w-1/2 md:flex-1  md:text-[#4F4F4F]">
        <h1 className="-mt-32 text-2xl text-center transition-all duration-500 ease-out cursor-pointer font-oswald hover:text-cyan-950 hover:scale-105">
          <a
            href="https://www.instagram.com/shahidphotography_/"
            target="_blank"
          >
            INSTAGRAM
          </a>
        </h1>
        <div className="h-20 mt-2 border-r-4 border-gray-500 mr-[380px]"></div>
      </div>
    </>
  );
};

export default Hero;
