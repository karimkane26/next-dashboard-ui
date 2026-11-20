import { Suspense } from "react";
import CarteUtilisateur from "@/app/composants/CarteUtilisateur";
import GraphiqueEffectif from "@/app/composants/GraphiqueEffectif";
import GraphiquePresence from "@/app/composants/GraphiquePresence";
import GraphiqueFinance from "@/app/composants/GraphiqueFinance";
import CalendrierEvenements from "@/app/composants/CalendrierEvenements";
import Annonces from "@/app/composants/Annonces";

// Page d'accueil de l'administrateur
const PageAdmin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* GAUCHE */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* CARTES DE STATISTIQUES */}
        <div className="flex gap-4 justify-between flex-wrap">
          <CarteUtilisateur libelle="élèves" />
          <CarteUtilisateur libelle="enseignants" />
          <CarteUtilisateur libelle="parents" />
          <CarteUtilisateur libelle="personnel" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* GRAPHIQUE FILLES / GARÇONS */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <GraphiqueEffectif />
          </div>
          {/* GRAPHIQUE DES PRÉSENCES */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <GraphiquePresence />
          </div>
        </div>
        {/* Le graphique doit être DANS la div qui a une hauteur */}
        <div className="w-full h-[500px]">
          <GraphiqueFinance />
        </div>
      </div>
      {/* DROITE */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* Suspense : le calendrier lit la date du jour, il est donc affiché au moment de la visite */}
        <Suspense fallback={<div className="bg-white p-4 rounded-md">Chargement...</div>}>
          <CalendrierEvenements />
        </Suspense>
        <Annonces />
      </div>
    </div>
  );
};

export default PageAdmin;
