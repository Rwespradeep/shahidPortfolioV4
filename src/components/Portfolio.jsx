import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import { fireapp, firestorage } from "../firebaseConfig";
import { getDownloadURL, listAll, ref } from "@firebase/storage";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Portfolio = () => {
  // const [images, setImages] = useState([]);
  const storageRef = ref(firestorage, "gs://shahidportfolio-4ea08.appspot.com");
  const [imageUrls, setImageUrls] = useState([]);
  const [dropState, setdropState] = useState(false);

  const handleDropState = () => {
    setdropState(!dropState);
  };

  const fetchingImages = async (imageType) => {
    const imagesRef = ref(storageRef, `/${imageType}`);
    const images = await listAll(imagesRef);
    const urls = await Promise.all(
      images.items.map(async (imageRef) => {
        const url = await getDownloadURL(imageRef);
        return url;
      })
    );
    setImageUrls(urls);
  };

  useEffect(() => {
    fetchingImages("grid_images");
  }, []);

  const handlePortraits = () => {
    // setImages(portrait_images);
    fetchingImages("grid_images/portraits/");
  };
  const handleLandscapes = () => {
    // setImages(landscape_images);
    fetchingImages("grid_images/landscapes/");
  };
  const handleEvents = () => {
    // setImages(event_images);
    fetchingImages("grid_images/events/");
  };

  const handleAutomobiles = () => {
    fetchingImages("/grid_images/automobiles/");
  };
  return (
    <>
      {/* navbar */}
      <div className="mt-4 w-full flex flex-col justify-center md:flex md:mt-10 lg:flex lg:flex-row lg:justify-between lg:text-[#4F4F4F] lg:w-screen">
        <div className="md:mt-10 lg:p-8 lg:m-8 lg:ml-16">
          <h1 className="mb-3 text-3xl text-center font-figtree md:text-4xl lg:text-5xl">
            PORTFOLIO
          </h1>
        </div>
        <div className="lg:flex lg:justify-between">
          <div className="hidden text-sm lg:flex lg:justify-between lg:gap-24 lg:p-12 lg:m-7 lg:mr-12 font-oswald lg:text-xl">
            <h2
              className="transition-all duration-500 ease-out cursor-pointer hover:text-cyan-950 hover:scale-105"
              onClick={handlePortraits}
            >
              PORTRAITS
            </h2>
            {/* <Grid className="block lg:hidden" images={imageUrls} /> */}
            <h2
              className="transition-all duration-500 ease-out cursor-pointer hover:text-cyan-950 hover:scale-105"
              onClick={handleLandscapes}
            >
              LANDSCAPES
            </h2>
            <h2
              className="transition-all duration-500 ease-out cursor-pointer hover:text-cyan-950 hover:scale-105"
              onClick={handleEvents}
            >
              EVENTS
            </h2>
            <h2
              className="transition-all duration-500 ease-out cursor-pointer hover:text-cyan-950 hover:scale-105"
              onClick={handleAutomobiles}
            >
              AUTOMOBILES
            </h2>
          </div>

          <div className="relative -mb-5 dropdown dropdown-end lg:hidden">
            <KeyboardArrowDownIcon
              className="relative -top-11 left-80 cursor-pointer md:-top-13 md:left-[680px] lg:hidden"
              onClick={handleDropState}
            />
            {dropState ? (
              <ul
                tabIndex={0}
                className="absolute z-50 top-4 text-gray-600 left-32 bg-white font-oswald dropdown-content menu p-4 border-2 w-52
                cursor-pointer
                md:left-[555px] md:bg-white md:font-oswald
                md:text-gray-600
                md:top-1
                md:tracking-widest
                lg:hidden"
              >
                <li
                  className="mb-2 hover:bg-white hover:text-black hover:rounded-sm"
                  onClick={handlePortraits}
                >
                  <a className="p-2">PORTRAITS</a>
                </li>
                <li
                  className="mb-2 hover:bg-white hover:text-black hover:rounded-sm"
                  onClick={handleLandscapes}
                >
                  <a className="p-2">LANDSCAPES</a>
                </li>
                <li
                  className="mb-2 hover:bg-white hover:text-black hover:rounded-sm"
                  onClick={handleEvents}
                >
                  <a className="p-2">EVENTS</a>
                </li>
                <li
                  className="mb-2 hover:bg-white hover:text-black hover:rounded-sm"
                  onClick={handleAutomobiles}
                >
                  <a className="p-2">AUTOMOBILES</a>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* grid */}
      <Grid className="hidden lg:block" images={imageUrls} />

      {/* see all button */}
      <p className="text-[#4F4F4F] font-oswald text-lg lg:text-2xl tracking-wider text-center mt-2 p-2 cursor-pointer">
        SEE ALL{" "}
        <span>
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </p>
    </>
  );
};

export default Portfolio;
