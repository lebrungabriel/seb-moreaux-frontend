import Image from "next/image";
import HeroSection from "./HeroSection";
import { BsChevronDown } from "react-icons/bs";
import PresseSection from "./PresseSection";

function Home() {
  return (
    <>
      <div className="w-screen h-screen flex items-end bg-white relative">
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
      <div className="w-screen h-[200px]" />
      <HeroSection />
      <div className="w-screen h-[200px]" />
      <PresseSection />
    </>
  );
}

export default Home;
