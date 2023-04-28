import React, { useState, useEffect } from "react";
import ChakraDrawer from "./ChakraDrawer";
import { BsChevronLeft } from "react-icons/bs";

const Navigation = (props) => {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHomePage(true);
    }
  }, []);

  return (
    <div className="w-screen h-[80px] absolute z-10 flex justify-between items-center px-5">
      {!isHomePage ? (
        <div className="w-[70%]">
          {/* <h1 className="text-2xl">Sébastien Moreaux</h1> */}
        </div>
      ) : (
        <div className="w-[70%]" />
      )}
      <ChakraDrawer />
    </div>
  );
};

export default Navigation;
