import Image from "next/image";
import React from "react";
import { FaDeezer, FaSpotify, FaApple } from "react-icons/fa";

const ReleaseSection = () => {
  return (
    <section className="w-screen">
      <h1 className="text-white mb-10 text-center uppercase tracking-widest text-3xl">
        Premier album
      </h1>
      <div className="w-full h-[70%] flex flex-col items-center justify-evenly">
        {/* <h1 className="text-2xl w-full text-left pl-5">Premier album</h1> */}
        <div className="w-[350px] h-[350px] relative">
          <Image
            src="/assets/cover.jpg"
            alt="cover"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="w-full my-10 text-white flex flex-col justify-evenly items-center">
          <p className="text-lg">Sébastien Moreaux - Piano, compositions</p>
          <p className="text-lg my-3">Cyril Drapé - Bass</p>
          <p className="text-lg">Alexis Léonardon - Drums</p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-evenly items-center">
        <div className="w-full my-10 flex justify-evenly items-center text-white">
          <FaSpotify className="w-[40px] h-[40px]" />
          <FaApple className="w-[40px] h-[40px]" />
          <FaDeezer className="w-[40px] h-[40px]" />
        </div>
        <button className="bg-black text-lg font-semibold text-[#D38451] px-20 py-3 rounded-full border border-[#D38451]">
          Acheter le CD
        </button>
      </div>
    </section>
  );
};

export default ReleaseSection;
