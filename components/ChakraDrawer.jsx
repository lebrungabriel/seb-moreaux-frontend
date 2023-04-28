import React, { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  //   DrawerFooter,
  //   DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  //   DrawerCloseButton,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";

const ChakraDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="bg-white w-[40px] h-[40px] rounded-full border border-gray-300 shadow-2xl flex justify-center items-center">
        <GiHamburgerMenu
          className="w-[50%] h-[50%] md:hidden"
          onClick={onOpen}
        />
      </div>
      <Drawer
        placement="bottom"
        onClose={onClose}
        isOpen={isOpen}
        trapFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent height="50% !important">
          <DrawerBody className="flex flex-col items-center justify-evenly">
            <a href="/" className="text-xl text-black border-none">
              Home
            </a>
            <a href="/bio" className="text-xl text-black border-none">
              Bio
            </a>
            <a href="/trio" className="text-xl text-black border-none">
              Trio
            </a>
            <a href="/concerts" className="text-xl text-black border-none">
              Concerts
            </a>
            <a href="/contact" className="text-xl text-black border-none">
              Contact
            </a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChakraDrawer;
