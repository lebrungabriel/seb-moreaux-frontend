import Image from "next/image";
import React from "react";

const PresseCard = (props) => {
  return (
    <div className="flex flex-col items-center bg-white mb-10">
      <div
        className={`w-[180px] h-[180px] ${
          props.source !== "/assets/actualité-juive.png"
            ? "bg-white"
            : "bg-[#E43234]"
        } relative shadow-xl`}
      >
        <Image
          src={props.source}
          alt="media-logo"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="w-full my-10 px-5">
        <p className="text-center text-xl">{props.legend}</p>
      </div>
    </div>
  );
};

export default PresseCard;
