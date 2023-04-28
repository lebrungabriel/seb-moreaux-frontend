import Image from "next/image";
import React from "react";
import Navigation from "../components/Navigation";

const Trio = () => {
  return (
    <>
      <Navigation />
      <section className="min-h-screen w-screen">
        <div className="w-[100%] h-[50vh] relative">
          <Image
            src="/assets/sebastien.jpg"
            alt="sebastien-moreaux"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-center py-10 px-3">
          <h1 className="uppercase text-2xl mb-10 tracking-widest">Le trio</h1>
          <p className="text-justify text-xl">
            Sébastien Moreaux s’affirme dans ce projet en tant que pianiste,
            compositeur, arrangeur et leader du groupe. Il commence ses études
            musicales à l’American School of Modern Music avant de rentrer au
            Conservatoire de Paris en 2018. <br /> Son jeu est caractérisé par
            un sens de la mélodie affirmé et des harmonies répétitives, tout en
            ayant une véritable conscience de l’espace. <br /> Il a eu
            l’occasion d’étudier ou de jouer avec Baptiste Trotignon, Fred
            Nardin, Laurent Coulondre, Manuel Rocheman, Yaron Herman, Spike
            Wilner, Jeb Patton, Peter Giron, Hervé Sellin, Laurent Courthaliac,
            etc...
          </p>
        </div>
      </section>

      <div className="w-screen h-[100px]" />

      <section className="w-screen">
        <div className="w-[100%] h-[50vh] relative">
          <Image
            src="/assets/cyril.jpg"
            alt="cyril-drapé"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-center py-10 px-3">
          <h1 className="uppercase text-2xl mb-10 tracking-widest">
            Cyril Drapé
          </h1>
          <p className="text-justify text-xl">
            Cyril Drapé commence la contrebasse à 18 ans. Débuts tardifs qui ne
            l’empêcheront pas de s’imposer dans le milieu du Jazz parisien. Il
            rentre au Conservatoire de Paris en 2018 et joue dans des projets de
            différents horizons. <br /> Étudiant au CNSM de Paris, il a
            notamment eu l’occasion de jouer ou étudier avec Alex Claffy, Or
            Bareket, Viktor Nyberg, Peter Giron, Franck Amsallem, Dexter
            Goldberg, Riccardo Del Fra, Francesco Ciniglio, Rick Margitza, etc..
          </p>
        </div>
      </section>

      <div className="w-screen h-[100px]" />

      <section className="h-screen w-screen relative">
        <div className="w-[100%] h-[50vh] relative">
          <Image
            src="/assets/alexis.jpg"
            alt="alexis-leonardon"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-center py-10 px-3">
          <h1 className="uppercase text-2xl mb-10 tracking-widest">
            Alexis Léonardon
          </h1>
          <p className="text-justify text-xl">
            Alexis Leonardon se forme sur les bancs de l’American School of
            Modern Music d’où il sortira diplômé en 2018. Son grand sens du
            swing et sa personnalité musicale font de lui un side-man autant
            demandé qu’apprécié. <br /> Il a pu travailler avec entre autres
            Peter Giron, Manuel Rocheman, Rick Margitza, Chris Culpo, Tony Saba,
            etc...
          </p>
        </div>
      </section>
    </>
  );
};

export default Trio;
