import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-screen h-screen bg-black flex items-end bg-white relative">
      <Image
        src="/assets/seb-hero-image.jpg"
        alt="hero-image"
        layout="fill"
        className="object-cover"
      />
      <div className="w-full h-[40%] relative px-3 flex flex-col justify-start items-center">
        <h1 className="text-white text-3xl tracking-widest mb-4">
          Sébastien Moreaux
        </h1>
        <h3 className="text-white text-lg tracking-wider">
          Pianiste - Compositeur - Arrangeur
        </h3>
        {/* <BsChevronDown className="absolute bottom-3 left-3 text-2xl text-white" /> */}
      </div>
    </div>
  );
};

export default HeroSection;
