import { Suspense } from "react";
import Annonces from "@/app/composants/Annonces";
import GrandCalendrier from "@/app/composants/GrandCalendrier";
import CalendrierEvenements from "@/app/composants/CalendrierEvenements";

// Page d'accueil de l'élève
const PageEleve = () => {
  return (
    <div className="px-4 flex gap-4 flex-col md:flex-row">
      {/* GAUCHE : emploi du temps */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="font-semibold">Emploi du temps (4A)</h1>
          <GrandCalendrier />
        </div>
      </div>
      {/* DROITE */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* Suspense : le calendrier lit la date du jour, il est donc affiché au moment de la visite */}
        <Suspense fallback={<div className="bg-white p-4 rounded-md">Chargement...</div>}>
          <CalendrierEvenements />
        </Suspense>
        <Annonces />
      </div>
    </div>
  );
};

export default PageEleve;
