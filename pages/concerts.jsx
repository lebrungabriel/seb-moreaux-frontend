import React from "react";
import ConcertsCard from "../components/ConcertsCard";
import Navigation from "../components/Navigation";

const Concerts = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen w-screen flex flex-col items-center justify-evenly">
        <h1 className="uppercase tracking-widest text-3xl mb-5">Concerts</h1>
        <ConcertsCard
          date="12.12.2023"
          location="Sunside - Paris"
          booking="Réserver"
        />
        <ConcertsCard
          date="12.12.2023"
          location="Sunside - Paris"
          booking="Réserver"
        />
        <ConcertsCard
          date="12.12.2023"
          location="Sunside - Paris"
          booking="Réserver"
        />
      </div>
    </>
  );
};

export default Concerts;
