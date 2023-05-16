// import React, { createContext, useState } from "react";
// import { firestorage, fireapp } from "./firebaseConfig";
// import { getDownloadURL, listAll, ref } from "@firebase/storage";

// export const imageContext = createContext(null);

// const imageProvider = ({ children }) => {
//   const storageRef = ref(firestorage, "gs://shahidportfolio-4ea08.appspot.com");
//   const [imageUrls, setImageUrls] = useState([]);

//   const fetchingImages = async (imageType) => {
//     const imagesRef = ref(storageRef, `/${imageType}`);
//     const images = await listAll(imagesRef);
//     const urls = await Promise.all(
//       images.items.map(async (imageRef) => {
//         const url = await getDownloadURL(imageRef);
//         return url;
//       })
//     );
//     setImageUrls(urls);
//   };

//   return (
//     <imageContext.Provider value={{ fetchingImages }}>
//       {children}
//     </imageContext.Provider>
//   );
// };

// export default imageProvider;
