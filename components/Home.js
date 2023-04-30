import Image from "next/image";
import HeroSection from "./HeroSection";
import PresseSection from "./PresseSection";
import ReleaseSection from "./ReleaseSection";

function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <div className="w-screen h-[150px] bg-black" />
      <ReleaseSection />
      <div className="w-screen h-[150px] bg-black" />
      <PresseSection />
    </div>
  );
}

export default Home;
