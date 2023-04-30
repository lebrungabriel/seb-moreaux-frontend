import Image from "next/image";
import React from "react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="w-screen h-screen bg-white">
        <div className="w-full h-[50%] relative flex justify-end items-start">
          <Image
            src="/assets/seb-contact.jpg"
            alt="sebastien-moreaux"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="bg-white flex flex-col items-start justify-evenly p-10 h-[30%] w-full">
          <a href="/" className="text-lg">
            instagram
          </a>
          <a href="/" className="text-lg">
            musicboxcompany11@gmail.com
          </a>
          <a href="/" className="text-lg">
            sebastienmoreauxmusic@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
