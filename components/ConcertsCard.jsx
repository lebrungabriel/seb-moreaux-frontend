import React from "react";

const ConcertsCard = (props) => {
  return (
    <div className="w-full h-[200px] flex flex-col justify-around items-center">
      <div className="flex w-[60%] justify-between items-center">
        <p>{props.date}</p>
        <p className="text-lg">{props.location}</p>
      </div>
      <button className="bg-white text-[#275176] border border-[#275176] px-10 py-3">
        {props.booking}
      </button>
      <div className="w-[80%] h-[1px] bg-gray-400" />
    </div>
  );
};

export default ConcertsCard;
