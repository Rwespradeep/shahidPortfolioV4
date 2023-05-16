// import React, { useEffect, useState } from "react";
// import { fireapp, firestorage } from "../firebaseConfig";
// import { getDownloadURL, listAll, ref } from "@firebase/storage";
// const Test = () => {
//   const storageRef = ref(firestorage, "gs://shahidportfolio-4ea08.appspot.com");
//   const [imageUrls, setImageUrls] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const imagesRef = ref(storageRef, "/grid_images");
//       const images = await listAll(imagesRef);
//       const urls = await Promise.all(
//         images.items.map(async (imageRef) => {
//           const url = await getDownloadURL(imageRef);
//           return url;
//         })
//       );
//       setImageUrls(urls);
//     };
//     fetchImages();
//   }, []);

//   return (
//     <div className="image-grid w-screen h-screen">
//       {imageUrls.map((url) => (
//         <img key={url} src={url} alt="image" />
//       ))}
//     </div>
//   );
// };

// export default Test;
