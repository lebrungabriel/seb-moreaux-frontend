import React from "react";
import PresseCard from "./PresseCard";

const PresseSection = () => {
  return (
    <section className="w-screen min-h-screen bg-orange-100 flex flex-col items-center">
      {/* <h1 className="uppercase text-4xl tracking-widest mb-20 text-left w-full px-5">
        Presse
      </h1> */}
      <h1 className="uppercase tracking-widest text-3xl mb-5">Presse</h1>
      <div>
        <PresseCard
          source="/assets/france-musique.png"
          legend='"Un pianiste à suivre"'
        />
        <PresseCard
          source="/assets/telerama.jpeg"
          legend="&quot;Fraîcheur, élan, spontanéité sont les termes qui s'imposent à l'écoute d'Interseasons&quot;"
        />
        <PresseCard
          source="/assets/tsf-jazz.jpeg"
          legend='"Un premier album lumineux, relevant déjà un certain brio pour les mélodies enchanteresses et entêtantes"'
        />
        <PresseCard
          source="/assets/jazz-mag.png"
          legend="&quot;On apprécie autant la maturité harmonique ou le toucher très sûr du pianiste, le drumming fin et alerte d'Alexis Léonardon que la solidité de l'assise offerte par Cyril Drapé&quot;"
        />
        <PresseCard
          source="/assets/actualité-juive.png"
          legend='"À ce jeune pianiste, les propos de Corneille "La valeur n&apos;attend point le nombre des années" s&apos;adaptent parfaitement"'
        />
        <PresseCard
          source="/assets/jazz-ra.jpeg"
          legend="&quot;Un premier album suffisamment révélateur d'une patte et d'un sens affirmé de la mélodie pour qu'on suive Sébastien Moreaux dans son futur parcours&quot;"
        />
      </div>
    </section>
  );
};

export default PresseSection;
