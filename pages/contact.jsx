import Image from "next/image";
import React from "react";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="w-screen h-screen">
        <div className="w-full h-[50%] relative flex justify-end items-start">
          <Image
            src="/assets/seb-contact.jpg"
            alt="sebastien-moreaux"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="bg-transparent flex flex-col items-center justify-evenly h-[50%] w-full">
          <a href="/">instagram</a>
          <a href="/">musicboxcompany11@gmail.com</a>
          <a href="/">sebastienmoreauxmusic@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default Contact;
