import React, { useContext, useEffect, useState } from "react";
import { fireapp, firestorage } from "../firebaseConfig";
import { getDownloadURL, listAll, ref } from "@firebase/storage";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const storageRef = ref(firestorage, "gs://shahidportfolio-4ea08.appspot.com");
  const [imageUrls, setImageUrls] = useState([]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
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
    fetchingImages("carousel_images");
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [imageUrls]);
  return (
    <div className="relative">
      <div className="flex">
        {imageUrls.map((image, index) => (
          <div
            key={index}
            className={`w-full lg:w-full ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            <img
              className={`w-full mx-auto md:w-full lg:max-w-3xl object-cover max-h-screen transition-opacity duration-5000 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              src={image}
              alt={image}
              style={{
                zIndex: index === activeIndex ? 1 : 0,
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1.5 right-0 flex justify-center mb-4">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-2 ${
              activeIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
