import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CircularProgress from "@mui/joy/CircularProgress";

const Grid = (props) => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState(props.images);

  useEffect(() => {
    setImages(props.images);
    setLoading(false);
  }, [props.images]);

  return (
    <div className="flex flex-col justify-center md:mx-36 lg:mx-20 lg:px-5 lg:-mt-10 ">
      <div
        className="grid grid-cols-1 grid-rows-1 gap-y-3
      md:grid md:grid-cols-2 md:grid-rows-3 md:gap-y-5 md:gap-x-5    
      lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-5"
      >
        {loading ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CircularProgress color="primary" size="md" variant="soft" />
          </div>
        ) : (
          <>
            {images.map((image, i) => (
              <div>
                <LazyLoadImage
                  key={image}
                  src={image}
                  className="w-80 mx-auto p-3 lg:w-auto"
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Grid;
