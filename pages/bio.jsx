import React from "react";
import Navigation from "../components/Navigation";

const Bio = () => {
  return (
    <>
      <Navigation />
      <div className="h-screen w-screen flex flex-col justify-around items-center">
        <div className="w-full h-full flex flex-col justify-center px-3 text-justify text-xl">
          <h1 className="uppercase tracking-widest text-2xl mb-10">A propos</h1>
          <p>
            Sébastien Moreaux a grandi en région parisienne. <br /> Né dans une
            famille de mélomanes, il débute le piano à ses 10 ans en autodidacte
            et ce n’est qu’à ses 17 ans qu’il décide d’en faire son métier. Il
            rentre alors en 2017 à l’American School of Modern Music où il
            restera 3 ans, avant de rentrer sur concours au CRR de Paris. Il en
            sortira diplômé en 2020. Il a eu l’occasion d’étudier avec de grands
            noms du Jazz tels que Manuel Rocheman, Yaron Herman, Jeb Patton,
            Spike Wilner, Franck Amsallem, etc.
          </p>
          <br />
          <p>
            A tout juste 25 ans, il est à la tête d’un trio qui porte son nom, «
            Sébastien Moreaux trio », avec lequel il vient d’enregistrer son
            premier disque, 11 titres originaux accompagnés de Cyril Drapé à la
            contrebasse et Alexis Leonardon à la batterie. <br /> Ensemble ils
            ont fait bon nombre de concerts à Paris, notamment au Sunside où ils
            ont eu un accueil chaleureux du public.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bio;
