import React, { useState } from "react";
import axios from "../axios";

const Contactus = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const [emailres, setemailRes] = useState("");
  const [emailState, setemailstate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, message };

    axios
      .post("/sendMail", data)
      .then((response) => {
        setemailRes(response.data);
        setemailstate(true);
      })
      .catch((error) => {
        setemailRes(error);
        setemailstate(false);
        alert("Unfortunately cannot send email at the moment");
      });

    axios.get("/").then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="lg:h-screen lg:w-screen lg:overscroll-x-none">
      <h1 className="font-figtree mt-24 text-3xl p-2 text-center md:text-5xl md:p-4 lg:p-1 lg:text-start lg:text-5xl lg:ml-28 text-[#4F4F4F] ">
        CONTACT US
      </h1>
      <div className="bg-[url('/contact_images/contact_cover.jpg')] bg-no-repeat bg-fill h-[650px] md:bg-cover md:h-[1000px] lg:bg-cover lg:h-[650px]">
        {/* writeme card */}
        <form onSubmit={handleSubmit}>
          <div
            className="w-80 h-60 relative top-10 left-5 lg:w-[450px] lg:h-[370px] border-2 border-black
        md:relative md:inset-0 md:left-[240px] md:top-[120px] md:w-72 md:h-56
        lg:ml-28 lg:mt-16 lg:p-15 lg:relative lg:left-4 lg:top-32 bg-white"
          >
            <h2 className="mt-5 ml-10 text-xl font-light text-black lg:ml-16 lg:mt-10 font-oswald lg:text-3xl">
              WRITE ME
            </h2>
            <div className="flex flex-col ml-8 w-52 lg:w-80 lg:ml-16 p-2 font-figtree text-[#4F4F4F]">
              <input
                className="mt-5 border-b-2 border-gray-500 outline-none"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <input
                className="my-5 border-b-2 border-gray-500 outline-none"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="text"
                className="border-b-2 border-gray-500 outline-none"
                placeholder="Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />

              <button className="relative p-4 mt-20 mr-8 text-white md:mt-10 lg:mr-0 left-10 md:left-5 lg:left-0 lg:mt-6 font-oswald lg:p-2 bg-gray-950 hover:bg-white hover:text-black">
                SEND
              </button>
              {emailState ? (
                <p className="p-5 text-center">Email sent Successfully</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>

        <div className="flex flex-col text-center text-white font-figtree mt-72 text-opacity-80 lg:mt-0 lg:font-figtree lg:text-white lg:flex lg:flex-col lg:absolute lg:right-8">
          <h1>8179016122</h1>
          <h1>shahidphotography12@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
