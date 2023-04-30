import React, { useState, useEffect } from "react";
import ChakraDrawer from "./ChakraDrawer";

const Navigation = (props) => {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isTrioPage, setIsTrioPage] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHomePage(true);
    } else if (window.location.pathname === "/trio") {
      setIsTrioPage(true);
    } else if (window.location.pathname === "/contact") {
      setIsContactPage(true);
    }
  }, []);

  return (
    <div
      className={`w-screen h-[80px] z-10 flex justify-between items-center px-5 ${
        (isHomePage && "absolute") ||
        (isTrioPage && "absolute") ||
        (isContactPage && "absolute")
      }`}
    >
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
